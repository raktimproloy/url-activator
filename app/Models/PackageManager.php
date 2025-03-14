<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PackageManager extends Model
{
    use HasFactory;

    protected $table = 'package_managers';
    protected $fillable = [
        'user_id', 'status', 'package_slug', 'url_count', 'urls', 
        'started_at', 'end_at', 'priority', 'last_checked'
    ];

    protected $casts = [
        'urls' => 'array',
        'started_at' => 'datetime',
        'end_at' => 'datetime',
        'last_checked' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
