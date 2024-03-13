<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
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
        $products = Product::all();

        return Inertia::render('Product/Product', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/ProductCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'name' => 'required',
            'price' => 'required',
            'shortDescription' => 'required',
            'image' => 'required',
        ]);

        $product = Product::create([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => request('image'),
            'gallery' => request('gallery'),
        ]);

        var_dump($product);

        return Redirect::route('product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return view('products.edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $this->validate($request, [
            'name' => 'required',
            'price' => 'required',
            'shortDescription' => 'required',
            'image' => 'required',
        ]);

        $product->update([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => request('image'),
            'gallery' => request('gallery'),
        ]);

        return redirect(route('products.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return back();
    }
}
