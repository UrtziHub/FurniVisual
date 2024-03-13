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

        $productFileName = ''; // Initialize productFileName variable

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }

        $product = Product::create([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => $productFileName,
            'gallery' => request('gallery'),
        ]);

        $product->save();

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
        return Inertia::render('Product/ProductEdit', compact('product'));
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


        $productFileName = ''; // Initialize productFileName variable

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }


        /* Handle gallery images upload
    if ($request->hasFile('gallery')) {
        $galleryFiles = $request->file('gallery');
        foreach ($galleryFiles as $galleryFile) {
            $galleryFileName = $galleryFile->hashName();
            $galleryFile->storeAs('products', $galleryFileName, 'public');
            // Associate gallery file names with product or store in database as needed
        }
    }*/

        $product->update([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => $productFileName,
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

        //Eliminar imagen relacionada

        return Redirect::back();
    }
}
