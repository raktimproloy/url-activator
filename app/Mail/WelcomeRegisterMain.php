<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WelcomeRegisterMain extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $subject;
    public $message;

    /**
     * Create a new message instance.
     *
     * @param string $name
     */
    public function __construct($name)
    {
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // Get the APP_NAME from the .env file
        $appName = config('app.name'); // This retrieves the APP_NAME from the config
    
        return $this->subject("Welcome To {$appName}") // Use the APP_NAME in the subject
                    ->view('emails.welcome_register')
                    ->with([
                        'name' => $this->name,
                        'appName' => $appName, // Pass the APP_NAME to the view if needed
                    ]);
    }
}
