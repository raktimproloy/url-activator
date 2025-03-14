<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 
        'stripe_id', 
        'stripe_status', 
        'stripe_session_id', 
        'currency', 
        'country', 
        'email', 
        'name', 
        'phone', 
        'invoice_id', 
        'package_slug', 
        'order_id', 
        'payment_method', 
        'payment_status', 
        'subscription', 
        'type', 
        'stripe_price', 
        'ends_at'
    ];

    protected $dates = ['ends_at'];
}