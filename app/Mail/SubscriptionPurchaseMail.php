<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SubscriptionPurchaseMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $package_title;
    public $invoice_id;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $email
     * @param string $package_title
     * @param string $invoice_id
     */
    public function __construct($name, $email, $package_title, $invoice_id)
    {
        $this->name = $name;
        $this->email = $email;
        $this->package_title = $package_title;
        $this->invoice_id = $invoice_id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Thank You for Purchase Subscription')
                    ->view('emails.subscription_purchase')
                    ->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'package_title' => $this->package_title,
                        'invoice_id' => $this->invoice_id,
                    ]);
    }
}
