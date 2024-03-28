<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): Response
    {
        $categories = Category::all();

        return Inertia::render('Category/Category', compact('categories'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Category/CategoryCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        $request->validated();

        $categoryFileName = ''; // Initialize categoryFileName variable

        if ($request->hasFile('image')) {
            $categoryFile = $request->file('image');
            $categoryFileName = $categoryFile->hashName();
            $categoryFile->storeAs('categories', $categoryFileName, 'public');
        }

        $category = Category::create([
            'name' => request('name'),
            'description' => request('description'),
            'image' => $categoryFileName,
        ]);

        $category->save();

        return Redirect::route('admin.category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return Inertia::render('Category/CategoryEdit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:500',
        ];

        if ($request->hasFile('image')) {
            $rules['image'] = 'image|mimes:jpeg,png,jpg,gif|max:2048';
        }

        $this->validate($request, $rules);

        $categoryFileName = $category->image; // Initialize categoryFileName variable

        if ($request->hasFile('image')) {
            $categoryFile = $request->file('image');
            $categoryFileName = $categoryFile->hashName();
            $categoryFile->storeAs('categories', $categoryFileName, 'public');
        }

        $category->update([
            'name' => request('name'),
            'description' => request('description'),
            'image' => $categoryFileName,
        ]);

        return Redirect::route('admin.category.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        // Get all products associated with the category
        $products = $category->products;

        // Delete all products
        foreach ($products as $product) {
            $product->delete();
        }

        $category->delete();

        // Deletes the linked image
        if ($category->image) {
            Storage::disk('public')->delete('categories/' . $category->image);
        }

        return Redirect::back();
    }
}
