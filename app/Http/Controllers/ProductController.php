<?php

namespace App\Http\Controllers;

use App\Models\Product;
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
    public function show(Product $product): Response
    {
        $product->load('category');
        return Inertia::render('Product/Show', compact('product'));
    }
}
