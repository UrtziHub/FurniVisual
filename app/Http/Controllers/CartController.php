<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCartRequest;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * This function retrieves the currently authenticated user and their active shopping cart.
     * It then loads the products related to the shopping cart into memory to avoid additional database queries.
     * It calculates the total price of the products in the cart by iterating over each product and adding its price to the total.
     * Finally, it returns a view named 'Cart' using the Inertia package, with the shopping cart and the total price as data.
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
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreCartRequest $request)
    {
        $request->validated();

        $user = auth()->user();

        // Gets or creates an active cart for the user
        $cart = $user->carts->where('active', true)->first();
        if (!$cart) {
            $cart = $user->carts->create(['active' => true]);
        }

        $product = Product::findOrFail($request->input('product_id'));

        $existingProduct = $cart->products()->where('product_id', $product->id)->first();

        if ($existingProduct) {
            return "This product already exist please edit or create a new one";
            // Cuando exista el producto en el carrito hacer algo
        }

        //Create Json for the database
        $imagesJsonNames = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $imageFile) {
                $imageFileName = $user->id . '-' . $imageFile->hashName();
                // Save the image in the file system
                $imageFile->storeAs('cart', $imageFileName, 'public');
                $imagesJsonNames[] = $imageFileName;
            }
        }

        $modelJsonNames = [];
        if ($request->hasFile('model')) {
            foreach ($request->file('model') as $modelFile) {
                $modelFileName = $user->id . '-' . $modelFile->hashName();
                // Save the model in the file system
                $modelFile->storeAs('model', $modelFileName, 'public');
                $modelJsonNames[] = $modelFileName;
            }
        }


        // Add the product to the cart with the provided data
        $cart->products()->attach($product->id, [
            'products_number' => $request->input('products_number'),
            'perspective' => $request->input('perspective'),
            'model' => json_encode($modelJsonNames),
            'deadline' => $request->input('deadline'),
            'images' => json_encode($imagesJsonNames),
            'information' => $request->input('information'),
        ]);

        $cart->save();

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
     * @return Cart
     */
    public function destroy(Cart $cart)
    {
        return $cart;
    }

    /**
     * Remove the specified product from the cart.
     *
     * This function retrieves the currently authenticated user and their active shopping cart.
     * It then gets the images and models associated with the product in the cart.
     * The function decodes the filenames of the images and models.
     * If there are any images, it deletes the image files from the server.
     * If there are any models, it deletes the model files from the server.
     * Finally, it detaches the product from the cart and redirects the user to the cart index page.
     *
     * @param Product $product
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroyProduct(Product $product)
    {
        $user = auth()->user();
        $cart = $user->carts->where('active', true)->first();

        // Gets the images and models associated with the product
        $images = $cart->products()->where('product_id', $product->id)->pluck('images')->first();
        $models = $cart->products()->where('product_id', $product->id)->pluck('model')->first();

        // Decodes the filenames of the images and models
        $images = json_decode($images, true);
        $models = json_decode($models, true);

        if ($images) {
            // Delete the image files from the server
            foreach ($images as $imageName) {
                Storage::disk('public')->delete('cart/' . $imageName);
            }
        }

        if ($models) {
            // Delete the model files from the server
            foreach ($models as $modelName) {
                Storage::disk('public')->delete('model/' . $modelName);
            }
        }

        $cart->products()->detach($product);

        return Redirect::route('cart.index');
    }
}
