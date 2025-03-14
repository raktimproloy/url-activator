<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class InvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $package_title;
    public $price;
    public $currency;
    public $invoice_id;
    public $endAt;
    public $status;
    public $method;

    /**
     * Create a new message instance.
     *
     * @param string $name
     * @param string $email
     * @param string $package_title
     * @param string $price
     * @param string $currency
     * @param string $invoice_id
     * @param string $endAt
     * @param string $status
     * @param string $method
     */
    public function __construct($name, $email, $package_title, $price, $currency, $invoice_id, $endAt, $status, $method)
    {
        $this->name = $name;
        $this->email = $email;
        $this->package_title = $package_title;
        $this->price = $price;
        $this->currency = $currency;
        $this->invoice_id = $invoice_id;
        $this->endAt = $endAt;
        $this->status = $status;
        $this->method = $method;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Thank You for Purchase Subscription')
                    ->view('emails.invoice')
                    ->with([
                        'name' => $this->name,
                        'email' => $this->email,
                        'package_title' => $this->package_title,
                        'price' => $this->price,
                        'currency' => $this->currency,
                        'invoice_id' => $this->invoice_id,
                        'endAt' => $this->endAt,
                        'status' => $this->status,
                        'method' => $this->method,
                    ]);
    }
}
