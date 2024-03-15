<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('last_name');
            $table->string('website')->nullable();
            $table->integer('phone');
            $table->string('email')->unique();
            $table->boolean('is_admin')->default(false);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        User::create([
            'name' => 'Admin',
            'last_name' => 'Admin',
            'website' => 'example.com',
            'phone' => 123456789,
            'email' => 'admin@example.org',
            'is_admin' => true,
            'password' => Hash::make('admin'),
        ]);

        User::create([
            'name' => 'User',
            'last_name' => 'User',
            'website' => 'example.com',
            'phone' => 123456788,
            'email' => 'user@example.org',
            'password' => Hash::make('user'),
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
