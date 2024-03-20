<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Models\Cart;
use App\Models\Category;
use App\Models\Order;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Cashier\Cashier;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// About us page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// UserView page
Route::get('/user-management', [UserController::class, 'index'])->name('user.index');
Route::post('/user/changeStatus', [UserController::class, 'changeStatus']);

// Catalogue page
Route::get('/catalogue', [CatalogueController::class, 'index'])->name('catalogue');

// Category product page
Route::get('/category-product/{category}', [CategoryProductController::class, 'index'])->name('categoryProduct');

// Product page for users
Route::get('/product/{product}', [ProductController::class, 'show'])->name('product.show');

// Product page for admins
Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin/product', [AdminProductController::class, 'index'])->name('admin.product.index');
    Route::get('/admin/product/create', [AdminProductController::class, 'create'])->name('admin.product.create');
    Route::post('/admin/product', [AdminProductController::class, 'store'])->name('admin.product.store');
    Route::get('/admin/product/edit/{product}', [AdminProductController::class, 'edit'])->name('admin.product.edit');
    Route::post('/admin/product/{product}', [AdminProductController::class, 'update'])->name('admin.product.update');
    Route::delete('/admin/product/{product}', [AdminProductController::class, 'destroy'])->name('admin.product.destroy');
});

// Category page
Route::get('/category/{category}', [CategoryController::class, 'show'])->name('category.show');

// Category page for admins
Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin/category', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::get('/admin/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/admin/category', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/admin/category/edit/{category}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::put('/admin/category/{category}', [CategoryController::class, 'update'])->name('admin.category.update');
    Route::delete('/admin/category/{category}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');
});

// How to order page
Route::get('/how-order', function () {
    return Inertia::render('HowOrder');
})->name('how-order');

// Privacy page
Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

// Contact page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

// Regulation page
Route::get('/regulations', function () {
    return Inertia::render('Regulations');
})->name('regulations');

// Group of auth verified middleware
Route::middleware(['auth', 'verified'])->group(function () {
    //Cart page
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/product/{product}', [CartController::class, 'destroyProduct'])->name('cart.destroy.product');
});

Route::get('/a', function () {
    return \App\Models\User::all();
})->name('a');

// Checkout page
Route::post('/checkout', [ProductController::class, 'checkout'])->name('checkout');
//Route::match(['get', 'post'], '/checkout', [ProductController::class, 'checkout'])->name('checkout');
Route::get('/success', [ProductController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [ProductController::class, 'cancel'])->name('checkout.cancel');

/*Route::get('/charge', function () {
    return view('charge');
});*/

/*Route::get('/checkout', function (Request $request) {
    $stripePriceId = 'price_1OwOIrRpxT4HivI8Jc7AhMdw';

    $quantity = 1;

    return $request->user()->checkout([$stripePriceId => $quantity], [
        'success_url' => route('checkout-success'),
        'cancel_url' => route('checkout-cancel'),
    ]);
})->name('checkout');

Route::get('/checkout/success', function (Request $request) {
    $sessionId = $request->get('session_id');

    if ($sessionId === null) {
        return;
    }

    $session = Cashier::stripe()->checkout->sessions->retrieve($sessionId);

    if ($session->payment_status !== 'paid') {
        return;
    }

    $orderId = $session['metadata']['order_id'] ?? null;

    $order = Order::findOrFail($orderId);

    $order->update(['status' => 'completed']);

    return view('checkout-success', ['order' => $order]);
})->name('checkout-success');

Route::get('checkout.cancel')->name('checkout-cancel');

Route::get('/cart/{cart}/checkout', function (Request $request, Cart $cart) {
    $order = Order::create([
        'cart_id' => $cart->id,
        'price_ids' => $cart->price_ids,
        'status' => 'incomplete',
    ]);

    return $request->user()->checkout($order->price_ids, [
        'success_url' => route('checkout-success') . '?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => route('checkout-cancel'),
        'metadata' => ['order_id' => $order->id],
    ]);
})->name('checkout');

Route::get('/billing-portal', function (Request $request) {
    return $request->user()->redirectToBillingPortal(route('billing'));
});*/

require __DIR__ . '/auth.php';
