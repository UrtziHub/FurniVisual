<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartRequest;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $user = auth()->user();
        $cart = $user->carts->where('active', true)->first();
        $cart->load('products');
        $total = 0;
        foreach ($cart->products as $product) {
            $total += $product->price;
        }
        return Inertia::render('Cart', compact('cart', 'total'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCartRequest $request)
    {
        $request->validated();

        $user = auth()->user();

        // Obtén o crea un carrito activo para el usuario
        $cart = $user->carts->where('active', true)->first();
        if (!$cart) {
            $cart = $user->carts->create(['active' => true]);
        }

        $product = Product::findOrFail($request->input('product_id'));

        $existingProduct = $cart->products()->where('product_id', $product->id)->first();

        if ($existingProduct) {
            return "This product already exist pls edit or create a new one";
            // Cuando exista el producto en el carrito hacer algo
        }
        //Create Json for the database
        $imagesJsonNames = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $imageFileName = $user->id . '-' . $imageFile->hashName();
                // Guarda la imagen en el sistema de archivos
                $imageFile->storeAs('cart', $imageFileName, 'public');
                $imagesJsonNames[] = $imageFileName;
            }
        }

        $modelJsonNames = [];
        if ($request->hasFile('model')) {
            foreach ($request->file('model') as $modelFile) {
                $modelFileName = $user->id . '-' . $modelFile->hashName();
                // Guarda el modelo en el sistema de archivos
                $modelFile->storeAs('model', $modelFileName, 'public');
                $modelJsonNames[] = $modelFileName;
            }
        }

        // Adjunta el producto al carrito con los datos proporcionados
        $cart->products()->attach($product->id, [
            'products_number' => $request->input('products_number'),
            'perspective' => $request->input('perspective'),
            'model' => json_encode($modelJsonNames),
            'deadline' => $request->input('deadline'),
            'images' => json_encode($imagesJsonNames),
            'information' => $request->input('information'),
        ]);

        return Redirect::route('cart.index');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Cart $cart
     * @return \Illuminate\Http\Response
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Cart $cart
     * @return \Illuminate\Http\Response
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Cart $cart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Cart $cart
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cart $cart)
    {
        return $cart;
    }

    public function destroyProduct(Product $product)
    {
        $user = auth()->user();
        $cart = $user->carts->where('active', true)->first();

        // Obtén las imágenes y los modelos asociados al producto
        $images = $cart->products()->where('product_id', $product->id)->pluck('images')->first();
        $models = $cart->products()->where('product_id', $product->id)->pluck('model')->first();

        // Decodifica los nombres de archivo de las imágenes y los modelos
        $images = json_decode($images, true);
        $models = json_decode($models, true);

        if ($images) {
            // Elimina los archivos de imagen del servidor
            foreach ($images as $imageName) {
                Storage::disk('public')->delete('cart/' . $imageName);
            }
        }

        if ($models) {
            // Elimina los archivos de modelo del servidor
            foreach ($models as $modelName) {
                Storage::disk('public')->delete('model/' . $modelName);
            }
        }

        $cart->products()->detach($product);

        return Redirect::route('cart.index');
    }
}
