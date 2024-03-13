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
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'shortDescription' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $productFileName = ''; // Initialize productFileName variable

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }

        $galleryFileNames = []; // Initialize an array to store gallery file names

        if ($request->hasFile('gallery')) {
            $galleryFiles = $request->file('gallery');
            foreach ($galleryFiles as $galleryFile) {
                $galleryFileName = $galleryFile->hashName();
                $galleryFile->storeAs('products', $galleryFileName, 'public');
                $galleryFileNames[] = $galleryFileName; // Add each file name to the array
            }
        }

        $product = Product::create([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => $productFileName,
            'gallery' => $galleryFileNames, // Assign the array of file names to 'gallery'
        ]);

        $product->save();

        return Redirect::route('product.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return Inertia::render('Product/Show', compact('product'));
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
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'shortDescription' => 'required|string|max:255',
        ]);

        $productFileName = ''; // Initialize productFileName variable

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }

        $galleryFileNames = []; // Initialize an array to store gallery file names

        if ($request->hasFile('gallery')) {
            $galleryFiles = $request->file('gallery');
            foreach ($galleryFiles as $galleryFile) {
                $galleryFileName = $galleryFile->hashName();
                $galleryFile->storeAs('products', $galleryFileName, 'public');
                $galleryFileNames[] = $galleryFileName; // Add each file name to the array
            }
        }

        // Update product attributes
        $product->update([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'shortDescription' => $request->input('shortDescription'),
            'fullDescription' => $request->input('fullDescription'),
            'image' => $productFileName,
            'gallery' => $galleryFileNames, // Assign the array of file names to 'gallery'
        ]);

        return Redirect::route('product.index');
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
