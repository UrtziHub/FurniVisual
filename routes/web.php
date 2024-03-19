<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use Illuminate\Foundation\Application;
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

// Catalogue page
Route::get('/catalogue', [CatalogueController::class, 'index'])->name('catalogue');

// Category product page
Route::get('/category-product/{category}', [CategoryProductController::class, 'index'])->name('categoryProduct');

// Product page for users
Route::get('/product/{product}', [ProductController::class, 'show'])->name('product.show');
Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin/product', [AdminProductController::class, 'index'])->name('admin.product.index');
    Route::get('/admin/product/create', [AdminProductController::class, 'create'])->name('admin.product.create');
    Route::post('/admin/product', [AdminProductController::class, 'store'])->name('admin.product.store');
    Route::get('/admin/product/edit/{product}', [AdminProductController::class, 'edit'])->name('admin.product.edit');
    Route::put('/admin/product/{product}', [AdminProductController::class, 'update'])->name('admin.product.update');
    Route::delete('/admin/product/{product}', [AdminProductController::class, 'destroy'])->name('admin.product.destroy');
});

// Category page
Route::get('/category/{category}', [CategoryController::class, 'show'])->name('category.show');
Route::middleware(['auth', 'is_admin'])->group(function () {
    Route::get('/admin/category', [CategoryController::class, 'index'])->name('admin.category.index');
    Route::get('/admin/category/create', [CategoryController::class, 'create'])->name('admin.category.create');
    Route::post('/admin/category', [CategoryController::class, 'store'])->name('admin.category.store');
    Route::get('/admin/category/edit/{category}', [CategoryController::class, 'edit'])->name('admin.category.edit');
    Route::put('/admin/category/{category}', [CategoryController::class, 'update'])->name('admin.category.update');
    Route::delete('/admin/category/{category}', [CategoryController::class, 'destroy'])->name('admin.category.destroy');
});



//How to order page
Route::get('/how-order', function () {
    return Inertia::render('HowOrder');
})->name('how-order');

//Privacy page
Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');

//Contact page
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

//Contact page
Route::get('/regulations', function () {
    return Inertia::render('Regulations');
})->name('regulations');


//Group of auth verified midleware
Route::middleware(['auth', 'verified'])->group(function () {
    //Cart page
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/product/{product}', [CartController::class, 'destroyProduct'])->name('cart.destroy.product');


});

require __DIR__ . '/auth.php';
