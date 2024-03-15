<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
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
    /**
     * Display a listing of the resource.
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
    public function store(Request $request): RedirectResponse
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);

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
    public function update(Request $request, Category $category)
    {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'image' => 'required',
        ]);


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

        return Redirect::back();
    }
}
