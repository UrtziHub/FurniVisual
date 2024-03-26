<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $users = User::withTrashed()->orderBy('id')->skip(1)->take(PHP_INT_MAX)->get();


        return Inertia::render('UserView', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\User $user
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function update(Request $request, User $user)
    {
        $user->update([
            'is_admin' => $request->input('is_admin'),
        ]);

        return redirect(route('user.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::back();
    }

    public function changeTrashStatus(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'trashed' => 'required|boolean',
        ]);

        $user = User::withTrashed()->findOrFail($request->user['id']);
        if ($request->trashed) {
            $user->delete();
        } else {
            $user->restore();
        }

        return back()->with('message', 'User trash status updated successfully');
    }

    public function changeStatus(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'is_admin' => 'required|boolean',
        ]);

        $user = User::withTrashed()->findOrFail($request->user['id']);
        $user->is_admin = $request->is_admin;
        $user->save();

        return back()->with('message', 'User status updated successfully');
    }
}
