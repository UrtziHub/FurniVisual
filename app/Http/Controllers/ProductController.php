<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
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

//    /**
//     * Show the form for creating a new resource.
//     */
//    public function create()
//    {
//        return Inertia::render('Product/ProductCreate');
//    }
//
//    /**
//     * Store a newly created resource in storage.
//     */
//    public function store(Request $request): RedirectResponse
//    {
//        $this->validate($request, [
//            'name' => 'required|string|max:255',
//            'price' => 'required|numeric|min:0',
//            'shortDescription' => 'required|string|max:255',
//            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
//            'gallery' => 'array|max:5',
//            'gallery.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
//        ]);
//
//        $productFileName = '';
//
//        if ($request->hasFile('image')) {
//            $productFile = $request->file('image');
//            $productFileName = $productFile->hashName();
//            $productFile->storeAs('products', $productFileName, 'public');
//        }
//
//        $galleryFileNames = [];
//
//        if ($request->hasFile('gallery')) {
//            $galleryFiles = $request->file('gallery');
//            foreach ($galleryFiles as $galleryFile) {
//                $galleryFileName = $galleryFile->hashName();
//                $galleryFile->storeAs('products', $galleryFileName, 'public');
//                $galleryFileNames[] = $galleryFileName;
//            }
//        }
//
//        $product = Product::create([
//            'name' => request('name'),
//            'price' => request('price'),
//            'shortDescription' => request('shortDescription'),
//            'fullDescription' => request('fullDescription'),
//            'image' => $productFileName,
//            'gallery' => $galleryFileNames,
//        ]);
//
//        $product->save();
//
//        return Redirect::route('product.index');
//    }
//
//    /**
//     * Display the specified resource.
//     */
//    public function show(Product $product)
//    {
//        return Inertia::render('Product/Show', compact('product'));
//    }
//
//    /**
//     * Show the form for editing the specified resource.
//     */
//    public function edit(Product $product)
//    {
//        $this->authorize('view', $product);
//        return Inertia::render('Product/ProductEdit', compact('product'));
//    }
//
//    /**
//     * Update the specified resource in storage.
//     */
//    public function update(Request $request, Product $product)
//    {
//        $this->validate($request, [
//            'name' => 'required|string|max:255',
//            'price' => 'required|numeric|min:0',
//            'shortDescription' => 'required|string|max:255',
//        ]);
//
//        $productFileName = $product->image;
//
//        if ($request->hasFile('image')) {
//            $productFile = $request->file('image');
//            $productFileName = $productFile->hashName();
//            $productFile->storeAs('products', $productFileName, 'public');
//        }
//
//        $galleryFileNames = $product->gallery;
//
//        if ($request->hasFile('gallery')) {
//            foreach ($request->file('gallery') as $galleryFile) {
//                $galleryFileName = $galleryFile->hashName();
//                $galleryFile->storeAs('products', $galleryFileName, 'public');
//                $galleryFileNames[] = $galleryFileName;
//            }
//        }
//
//        // Update product attributes only if there's a change
//        $product->update([
//            'name' => $request->input('name'),
//            'price' => $request->input('price'),
//            'shortDescription' => $request->input('shortDescription'),
//            'fullDescription' => $request->input('fullDescription'),
//            'image' => $productFileName,
//            'gallery' => $galleryFileNames,
//        ]);
//
//        return Redirect::route('product.index');
//    }
//
//
//    /**
//     * Remove the specified resource from storage.
//     */
//    public function destroy(Product $product)
//    {
//        $product->delete();
//
//        //Eliminar imagen relacionada
//        if ($product->image) {
//            Storage::disk('public')->delete('products/' . $product->image);
//        }
//        // Eliminar imágenes de la galería
//        foreach ($product->gallery as $galleryImage) {
//            Storage::disk('public')->delete('products/' . $galleryImage);
//        }
//        return Redirect::back();
//    }
}
