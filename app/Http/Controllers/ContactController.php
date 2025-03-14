<?php

namespace App\Http\Controllers;

use App\Mail\NewsletterMail;
use App\Models\Contact;
use App\Models\Newsletter;
use Illuminate\Http\Request;
use App\Mail\ThankYouContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle the subscription checkout process.
     */
    public function contact(Request $request)
{
    // Create the contact
    $contact = Contact::create([
        'name' => $request->name,
        'email' => $request->email,
        'subject' => $request->subject,
        'message' => $request->message,
    ]);

    // Send the thank you email
    Mail::to($request->email)->send(new ThankYouContactMail($request->name, $request->subject, $request->message));

    return response()->json(['message' => 'Contact Successfully'], 200);
}
    
    public function newsletter(Request $request)
    {
        // Validate the email
        $request->validate([
            'email' => 'required|email'
        ]);
    
        // Check if the email exists in the database
        $newsletter = Newsletter::where('email', $request->email)->first();
    
        if ($newsletter) {
            if ($newsletter->status) {
                return response()->json(['message' => 'Email is already in the newsletter'], 200);
            } else {
                // Update status to true
                $newsletter->update(['status' => true]);
                Mail::to($request->email)->send(new NewsletterMail($request->email));
                return response()->json(['message' => 'Newsletter subscription activated'], 200);
            }
        } else {
            // Add new email to the newsletter
            Newsletter::create([
                'email' => $request->email,
                'status' => true,
            ]);
            Mail::to($request->email)->send(new NewsletterMail($request->email));
            return response()->json(['message' => 'Email added to the newsletter'], 200);
        }
    }
    

}