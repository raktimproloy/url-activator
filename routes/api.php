<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\PackageManagerController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Route;

Route::get('/api/pricing', [PriceController::class, 'index']);

Route::middleware('auth')->post('/api/subscribe', [SubscriptionController::class, 'createSubscription']);

Route::post('/api/contact', [ContactController::class, 'contact']);
Route::post('/api/newsletter', [ContactController::class, 'newsletter']);


Route::middleware('auth')->put('/api/update_urls', [PackageManagerController::class, 'urlUpdate']);
Route::middleware('auth')->put('/api/active_free', [PackageManagerController::class, 'activeFree']);


Route::post('/send-email', [EmailController::class, 'sendEmail']);