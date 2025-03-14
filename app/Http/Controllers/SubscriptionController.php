<?php

namespace App\Http\Controllers;

use App\Mail\InvoiceMail;
use App\Mail\SubscriptionPurchaseMail;
use App\Models\PackageManager;
use App\Models\Pricing;
use Illuminate\Http\Request;
use App\Models\Subscription;
use Inertia\Inertia;
use Laravel\Cashier\Cashier;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SubscriptionController extends Controller
{
    /**
     * Handle the subscription checkout process.
     */
    public function checkout(Request $request, $slug)
    {
        $price = Pricing::where('slug', $slug)->first();
        $stripePriceId = $price->stripe_id;
    
        // Create the order with a pending status
        $order = Subscription::create([
            'user_id' => $request->user()->id,
            'stripe_session_id' => '',
            'stripe_status' => 'pending',
            'type' => 'default',
        ]);
        // Create the checkout session
        $checkoutSession = $request->user()->newSubscription('default', $stripePriceId)->checkout([
            'success_url' => route('checkout.success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('checkout.cancel'),
            'metadata' => ['order_id' => $order->id, 'package_slug' => $slug, 'duration' => $price->duration],
        ]);
    
        // Ensure the checkout session ID is available before updating the order
        if ($checkoutSession && $checkoutSession->id) {
            $order->update(['stripe_session_id' => $checkoutSession->id]);
        } else {
            // Handle the case where the checkout session ID is not available
            // You might want to log an error or throw an exception
            throw new \Exception('Checkout session ID is not available.');
        }
    
        return $checkoutSession;
    }

    /**
     * Handle successful checkout and update subscription details.
     */
    
    public function success(Request $request)
    {
        $sessionId = $request->get('session_id');
        if (!$sessionId) {
            return redirect('/')->with('error', 'Invalid session.');
        }
    
        // Retrieve session details from Stripe
        $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);
        Log::info('Session Data: ', (array) $session);
        $price = Pricing::where('slug', $session->metadata->package_slug)->first();
    
        if ($session->payment_status !== 'paid') {
            return redirect('/')->with('error', 'Payment not completed.');
        }
    
        $user = auth()->user(); // Get the authenticated user
    
        // Retrieve order using session metadata
        $orderId = $session->metadata->order_id ?? null;
        if ($orderId) {
            $order = Subscription::find($orderId);
            if ($order) {
                Log::info('Order Found:', $order->toArray());
    
                // Update Subscription details
                $endsAt = $session->metadata->duration === 'monthly' ? now()->addMonth() : now()->addYear();
    
                $order->update([
                    'stripe_price' => $session->amount_total / 100,
                    'ends_at' => $endsAt,
                    'type' => 'subscription',
                    'stripe_id' => $session->customer,
                    'package_slug' => $session->metadata->package_slug,
                    'stripe_status' => $session->status,
                    'currency' => $session->currency,
                    'country' => $session->customer_details->address->country,
                    'email' => $session->customer_details->email,
                    'name' => $session->customer_details->name,
                    'phone' => $session->customer_details->phone,
                    'invoice_id' => $session->invoice,
                    'order_id' => $session->metadata->order_id ?? null,
                    'payment_method' => $session->payment_method_types[0] ?? null,
                    'payment_status' => $session->payment_status,
                    'subscription' => $session->subscription
                ]);
    
                // Handle PackageManager table
                $package = PackageManager::where('user_id', $user->id)->first();
                if (!$package) {
                    // Create new package entry
                    $newPackage = PackageManager::create([
                        'user_id' => $user->id,
                        'status' => 1,
                        'package_slug' => $session->metadata->package_slug,
                        'url_count' => $price -> url_count ?? 0,
                        'urls' => [],
                        'started_at' => now(),
                        'end_at' => $endsAt,
                        'priority' => $price -> priority ?? 3,
                        'last_checked' => now(),
                    ]);
                    $user->update([
                        'package_manager_id' => $newPackage->id,
                    ]);
                } else {
                    // Update existing package
                    $package->update([
                        'package_slug' => $session->metadata->package_slug,
                        'status' => 1,
                        'priority' => $price -> priority ?? 3,
                        'url_count' => $price -> url_count ?? 0,
                        'end_at' => $endsAt,
                        'last_checked' => now(),
                    ]);
                }


                Mail::to($request->email)->send(new SubscriptionPurchaseMail($session->customer_details->name, $session->customer_details->email, $price->title, $session->invoice));

                Mail::to($request->email)->send(new InvoiceMail($session->customer_details->name, $session->customer_details->email, $price->title, $session->amount_total / 100, $session->currency,  $session->invoice, $endsAt, $session->status, $session->payment_method_types[0] ?? null));

            } else {
                Log::error('Order not found for ID: ' . $orderId);
            }
        } else {
            Log::error('Order ID missing in session metadata');
        }
    
        return Inertia::render('checkout/success', ['session' => $session]);
    }
    
    public function invoiceList(Request $request)
    {
        $user = auth()->user();

        // Fetch subscriptions for the authenticated user, ordered by creation date in descending order
        $subscriptions = Subscription::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10); // Paginate with 10 items per page

        return Inertia::render('dashboard/invoice/list', [
            'subscriptions' => $subscriptions,
        ]);
    }

    public function invoiceView(Request $request, $id)
    {
        $user = auth()->user();
    
        // Fetch the subscription based on the provided ID
        $subscription = Subscription::where('invoice_id', $id)
            ->where('user_id', $user->id) // Ensure the subscription belongs to the authenticated user
            ->first();
    
        // If the subscription doesn't exist or doesn't belong to the user, return a 404
        if (!$subscription) {
            abort(404, 'Invoice not found or you do not have permission to view it.');
        }
    
        // Fetch the price information based on the subscription's package_slug
        $price = Pricing::where('slug', $subscription->package_slug)->first();
    
        // If the price doesn't exist, return a 404
        if (!$price) {
            abort(404, 'Price information not found for this subscription.');
        }
    
        // Pass the subscription and price details to the Inertia view
        return Inertia::render('dashboard/invoice/details', [
            'subscription' => $subscription,
            'price' => $price,
        ]);
    }
}
