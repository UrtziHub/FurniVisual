<?php

use App\Http\Controllers\CatalogueController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
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

// Abaut us page
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

// Calogue page
Route::get('/catalogue', [CatalogueController::class, 'index'])->name('catalogue');

// Category product page
Route::get('/category-product/{category}', [CategoryProductController::class, 'index'])->name('categoryProduct');

// Product page
Route::get('/product/index', [ProductController::class, 'index'])->name('product.index');
Route::get('/product/create', [ProductController::class, 'create'])->name('product.create');
Route::post('/product/index', [ProductController::class, 'store'])->name('product.store');
Route::get('/product/index/{product}', [ProductController::class, 'edit'])->name('product.edit');
Route::delete('/product/{product}', [ProductController::class, 'destroy'])->name('product.destroy');

// Category page
Route::get('/category/index', [CategoryController::class, 'index'])->name('category.index');
Route::get('/category/create', [CategoryController::class, 'create'])->name('category.create');
Route::post('/category/store', [CategoryController::class, 'store'])->name('category.store');
Route::get('/category/index/{category}', [CategoryController::class, 'edit'])->name('category.edit');
Route::delete('/category/{category}', [CategoryController::class, 'destroy'])->name('category.destroy');

require __DIR__.'/auth.php';
