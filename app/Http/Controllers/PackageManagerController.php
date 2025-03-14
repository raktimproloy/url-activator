<?php

namespace App\Http\Controllers;

use App\Models\PackageManager;
use App\Models\Pricing;
use Illuminate\Http\Request;
use App\Models\Subscription;
use Inertia\Inertia;
use Laravel\Cashier\Cashier;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class PackageManagerController extends Controller
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
            } else {
                Log::error('Order not found for ID: ' . $orderId);
            }
        } else {
            Log::error('Order ID missing in session metadata');
        }
    
        return Inertia::render('checkout/success', ['session' => $session]);
    }
    

    public function urlUpdate(Request $request)
    {
        // Validate the request
        $request->validate([
            'urls' => 'required|array',
            'urls.*.url' => 'required|string',
            'urls.*.isActive' => 'required|boolean',
        ]);

        // Get the authenticated user
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Find the user's package manager
        $packageManager = PackageManager::where('user_id', $user->id)->first();
        if (!$packageManager) {
            return response()->json(['message' => 'Package manager not found'], 404);
        }

        // Update the URLs
        $packageManager->urls = $request->urls;
        $packageManager->save();

        return response()->json(['message' => 'URLs updated successfully'], 200);
    }

    /**
     * Handle the activation of a free package.
     */
/**
 * Handle the activation of a free package.
 */
    public function activeFree(Request $request)
    {
        // Validate the request
        $request->validate([
            'slug' => 'required|string',
        ]);

        // Get the authenticated user
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        // Get the price details based on the slug
        $price = Pricing::where('slug', $request->slug)->first();
        if (!$price) {
            return response()->json(['message' => 'Price details not found'], 404);
        }

        // Find or create the user's package manager
        $packageManager = PackageManager::where('user_id', $user->id)->first();

        if (!$packageManager) {
            // Create new package manager entry if it doesn't exist
            $packageManager = PackageManager::create([
                'user_id' => $user->id,
                'status' => 1, // Assuming 0 means inactive or free package
                'package_slug' => $request->slug,
                'url_count' => $price->url_count ?? 0,
                'urls' => [], // Initialize with an empty array
                'started_at' => now(),
                'end_at' => $price->duration === 'monthly' ? Carbon::now()->addMonth() : Carbon::now()->addYear(),
                'priority' => $price->priority ?? 3,
                'last_checked' => now(),
            ]);

            // Optionally, update the user's package_manager_id if needed
            $user->update([
                'package_manager_id' => $packageManager->id,
            ]);
        } else {
            // Update existing package manager
            $urls = $packageManager->urls;
            $urlCount = $price->url_count;

            // Update URLs based on url_count
            foreach ($urls as $index => &$url) {
                $url['isActive'] = $index < $urlCount;
            }

            $packageManager->update([
                'status' => 1,
                'package_slug' => $request->slug,
                'url_count' => $urlCount,
                'urls' => $urls,
                'started_at' => now(),
                'end_at' => $price->duration === 'monthly' ? Carbon::now()->addMonth() : Carbon::now()->addYear(),
                'priority' => $price->priority ?? 3,
                'last_checked' => now(),
                'updated_at' => now(),
            ]);
        }

        return response()->json(['message' => 'Package updated successfully'], 200);
    }
}