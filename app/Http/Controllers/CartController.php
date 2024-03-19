<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
        return Inertia::render('Cart', compact('cart','total'));
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
    public function store(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required',
            'images' => 'required|array|max:5',
            'images.*' => 'image|max:2048',
            'model' => 'array|max:5',
            'model.*' => 'mimes:jpeg,png,jpg,gif|max:2048',
            'deadline' => 'date',
            'perspective' => 'required|integer',
            'information' => '',
            'products_number' => 'required|integer',
        ]);

        $user = auth()->user();

        // Obtén o crea un carrito activo para el usuario
        $cart = $user->carts->where('active', true)->first();
        if (!$cart) {
            $cart = $user->carts->create(['active' => true]);
        }

        $product = Product::findOrFail($request->input('product_id'));

        $existingProduct = $cart->products()->where('product_id', $product->id)->first();

        if($existingProduct){
            return "exist";
            // Cuando exista el producto en el carrito hacer algo
        }

        $imagesJsonNames = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $imageFileName = $imageFile->hashName();
                // Guarda la imagen en el sistema de archivos
                $imagesJsonNames[] = $imageFileName;
            }
        }

        // Adjunta el producto al carrito con los datos proporcionados
        $cart->products()->attach($product->id, [
            'products_number' => $request->input('products_number'),
            'perspective' => $request->input('perspective'),
            'model' => $request->input('model'),
            'deadline' => $request->input('deadline'),
            'images' => json_encode($imagesJsonNames), // Almacena los nombres de archivo como JSON
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
        $cart->products()->detach($product);

        return Redirect::route('cart.index');
    }
}
