<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PriceController extends Controller
{
    public function index()
    {
        return Pricing::paginate(30); // Fetch 10 items per page
    }

    
    public function show($slug)
    {
        $price = Pricing::where('slug', $slug)->first();
    
        if (!$price) {
            abort(404); // If price not found, show 404
        }
    
        // Return the Inertia page with the price data
        return Inertia::render('checkout/details', ['price' => $price]);
    }
}
