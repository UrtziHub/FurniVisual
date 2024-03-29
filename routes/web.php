<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use App\Mail\Ejemplo;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome');
})->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::post('/login', [AuthenticatedSessionController::class, 'attempt'])->name('login');

// About us page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Catalogue page
Route::get('/catalogue', [CatalogueController::class, 'index'])->name('catalogue');

// Category product page
Route::get('/category-product/{category}', [CategoryProductController::class, 'index'])->name('categoryProduct');

// Product page for users
Route::get('/product/{product}', [ProductController::class, 'show'])->name('product.show');

// Orders page
Route::get('/orders', [OrderController::class, 'index'])->name('orders.index');
Route::get('/orders/{order}', [OrderController::class, 'view'])->name('orders.view');

// Page for admins
Route::middleware(['auth', 'is_admin'])->group(function () {
    // Product page
    Route::get('/admin/product', [AdminProductController::class, 'index'])->name('admin.product.index');
    Route::get('/admin/product/create', [AdminProductController::class, 'create'])->name('admin.product.create');
    Route::post('/admin/product', [AdminProductController::class, 'store'])->name('admin.product.store');
    Route::get('/admin/product/edit/{product}', [AdminProductController::class, 'edit'])->name('admin.product.edit');
    Route::post('/admin/product/{product}', [AdminProductController::class, 'update'])->name('admin.product.update');
    Route::delete('/admin/product/{product}', [AdminProductController::class, 'destroy'])->name('admin.product.destroy');
    // UserView page
    Route::get('/admin/user-management', [UserController::class, 'index'])->name('user.index')->withTrashed();
    Route::post('/admin/user/change-status', [UserController::class, 'changeStatus'])->name('changeStatus')->withTrashed();
    Route::post('/admin/user/change-trashed-status', [UserController::class, 'changeTrashStatus'])->name('changeTrashStatus')->withTrashed();

    // Order Management page
    Route::get('/admin/orders', [OrderController::class, 'index'])->name('orders.index');
    Route::put('/admin/orders/{order}', [OrderController::class, 'updateStatus'])->name('orders.updateStatus');

    //Categories
    Route::get('/admin/category', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::get('/admin/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/admin/category', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/admin/category/edit/{category}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::post('/admin/category/{category}', [CategoryController::class, 'update'])->name('admin.category.update');
    Route::delete('/admin/category/{category}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');
});

Route::get('/orders', [OrderController::class, 'indexUser'])->name('orders.indexUser');
Route::get('/orders/{order}', [OrderController::class, 'view'])->name('orders.view');

// Group of auth verified middleware
Route::middleware(['auth', 'verified'])->group(function () {
    //Cart page
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/product/{product}', [CartController::class, 'destroyProduct'])->name('cart.destroy.product');

    //  Review
    Route::post('/reviews', [ReviewController::class, 'store'])->name('reviews.store');
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

// Addresses page
Route::get('/editAdresses', function () {
    return Inertia::render('Profile/EditAdresses');
})->name('editAdresses');

// Checkout page
Route::post('/checkout', [OrderController::class, 'checkout'])->name('checkout');
Route::get('/success', [OrderController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [OrderController::class, 'cancel'])->name('checkout.cancel');
Route::post('/webhook', [OrderController::class, 'webhook'])->name('checkout.webhook');

Route::get('/mailtest', function () {
    Mail::to('ulusarretaga22wg@ikzubirimanteo.com')->send(new Ejemplo('Urtzi'));
});

//Email verification
Route::get('/email/verify', function () {
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
    return redirect('home');
})->middleware(['auth', 'signed'])->name('verification.verify');
Route::get('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

require __DIR__ . '/auth.php';
