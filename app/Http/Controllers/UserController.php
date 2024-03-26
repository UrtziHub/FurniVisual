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

    /**
     * Change the trash status of a user.
     *
     * It finds the user with the given ID, including users that have been soft deleted.
     * If the 'trashed' field is true, the user is deleted (soft deleted).
     * If it is false, the user is restored.
     *
     * @param \Illuminate\Http\Request $request The request object, containing the 'user' and 'trashed' data.
     * @return \Illuminate\Http\RedirectResponse Redirects back to the previous page.
     */
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

    /**
     * Change the admin status of a user.
     *
     * This function validates the request data, ensuring that a 'user' and 'is_admin' field are present.
     * The 'is_admin' field must be a boolean. It then finds the user with the given ID, including users
     * that have been soft deleted. It sets the 'is_admin' field of the user to the value of the 'is_admin'
     * field in the request. The function then redirects back to the previous page with a success message.
     *
     * @param \Illuminate\Http\Request $request The request object, containing the 'user' and 'is_admin' data.
     * @return \Illuminate\Http\RedirectResponse Redirects back to the previous page.
     */
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
