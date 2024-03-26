<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Inertia\Inertia;

class CatalogueController extends Controller
{
    /**
     * Display the catalogue page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Catalogue', compact('categories'));
    }
}
