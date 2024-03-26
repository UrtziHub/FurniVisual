<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
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

        return Redirect::route('category.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        return view('categories.show', compact('category'));
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
    public function update(StoreCategoryRequest $request, Category $category)
    {
        $request->validated();

        $categoryFileName = ''; // Initialize categoryFileName variable

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

        return redirect(route('category.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();

        //Eliminar imagen relacionada
        /*$categoryFileName = $category->image;
        $categoryFile = public_path('storage/categories/' . $categoryFileName);
        if (file_exists($categoryFile
        )) {
            unlink($categoryFile);
        }*/

        return Redirect::back();
    }
}
