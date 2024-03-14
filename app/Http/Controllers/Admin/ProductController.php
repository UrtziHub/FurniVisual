<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
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
        $categories = Category::all();
        return Inertia::render('Product/ProductCreate', compact('categories'));
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
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'gallery' => 'array|max:5',
            'gallery.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'category' => 'required',
        ]);

        $productFileName = '';
        $galleryFileNames = [];

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }


        if ($request->hasFile('gallery')) {
            $galleryFiles = $request->file('gallery');
            foreach ($galleryFiles as $galleryFile) {
                $galleryFileName = $galleryFile->hashName();
                $galleryFile->storeAs('products', $galleryFileName, 'public');
                $galleryFileNames[] = $galleryFileName;
            }
        }

        $product = Product::create([
            'name' => request('name'),
            'price' => request('price'),
            'shortDescription' => request('shortDescription'),
            'fullDescription' => request('fullDescription'),
            'image' => $productFileName,
            'gallery' => $galleryFileNames,
        ]);

        //Relate the catgory to the product
        $product->category()->associate(request('category'));
        //Save the data
        $product->save();

        return Redirect::route('admin.product.index');
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

        $productFileName = $product->image;

        if ($request->hasFile('image')) {
            $productFile = $request->file('image');
            $productFileName = $productFile->hashName();
            $productFile->storeAs('products', $productFileName, 'public');
        }

        $galleryFileNames = $product->gallery;

        if ($request->hasFile('gallery')) {
            foreach ($request->file('gallery') as $galleryFile) {
                $galleryFileName = $galleryFile->hashName();
                $galleryFile->storeAs('products', $galleryFileName, 'public');
                $galleryFileNames[] = $galleryFileName;
            }
        }

        // Update product attributes only if there's a change
        $product->update([
            'name' => $request->input('name'),
            'price' => $request->input('price'),
            'shortDescription' => $request->input('shortDescription'),
            'fullDescription' => $request->input('fullDescription'),
            'image' => $productFileName,
            'gallery' => $galleryFileNames,
        ]);

        return Redirect::route('admin.product.index');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        //Eliminar imagen relacionada
        if ($product->image) {
            Storage::disk('public')->delete('products/' . $product->image);
        }
        // Eliminar imágenes de la galería
        foreach ($product->gallery as $galleryImage) {
            Storage::disk('public')->delete('products/' . $galleryImage);
        }
        return Redirect::back();
    }
}
