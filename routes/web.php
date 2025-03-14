<?php

use App\Http\Controllers\PriceController;
use App\Http\Controllers\SubscriptionController;
use App\Models\Subscription;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Order;
use Laravel\Cashier\Cashier;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/services', function () {
    return Inertia::render('services');
})->name('services');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/pricing', function () {
    return Inertia::render('pricing');
})->name('pricing');

Route::get('/contact', function () {
    return Inertia::render('contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/details/{slug}', [PriceController::class, 'show'])->name('checkout.details');
});





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard/pricing', function () {
        return Inertia::render('dashboard/pricing');
    })->name('dashboard.pricing');
});

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard/invoice', function () {
//         return Inertia::render('dashboard/invoice/list');
//     })->name('dashboard.invoice.list');
// });

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard/invoice/{id}', function () {
//         return Inertia::render(component: 'dashboard/invoice/details');
//     })->name('dashboard.invoice.details');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashbaord/invoice', [SubscriptionController::class, 'invoiceList'])->name('dashboard.invoice');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashbaord/invoice/view/{id}', [SubscriptionController::class, 'invoiceView'])->name('dashboard.invoice.view');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard/profile', function () {
        return Inertia::render(component: 'dashboard/profile/view');
    })->name('dashboard.profile');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard/url-management', function () {
        return Inertia::render(component: 'dashboard/url-management/index');
    })->name('dashboard.url_management');
});



Route::get('/payment/{slug}', [SubscriptionController::class, 'checkout']);

Route::get('/checkout/success', [SubscriptionController::class, 'success'])->name('checkout.success');
Route::view('/checkout/cancel', 'checkout.cancel')->name('checkout.cancel');


require __DIR__.'/settings.php';
require __DIR__.'/api.php';
require __DIR__.'/auth.php';
