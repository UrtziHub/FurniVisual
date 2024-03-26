<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Review;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = auth()->user()->products;

        return Inertia::render('Product/Product', compact('products'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product->load('category');
        $reviews = Review::where('product_id', $product->id)->get();
        $reviews->load('user');

        return Inertia::render('Product/Show', compact('product', 'reviews'));
    }
}
