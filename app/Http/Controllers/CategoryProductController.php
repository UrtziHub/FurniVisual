<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryProductController extends Controller
{
    public function index(Category $category)
    {
        $products = $category->products()->with('reviews')->paginate(4);
        foreach ($products as $product) {
            $product->averageRate = $product->reviews->avg('rate');
        }
        return inertia('CategoryProduct', [
            'products' => $products,
        ]);
    }
}
