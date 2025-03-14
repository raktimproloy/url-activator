<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'tag',
        'amount',
        'currency',
        'duration',
        'status',
        'stripe_id',
        'theme_color',
        'include',
    ];

        public function getRouteKeyName()
    {
        return 'slug'; // This tells Laravel to use the slug field for route model binding
    }

    protected $casts = [
        'include' => 'array', // Ensure Laravel treats it as an array
    ];
}
