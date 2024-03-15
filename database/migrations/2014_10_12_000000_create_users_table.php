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
            $table->unsignedBigInteger('role_id')->default(1);
            $table->string('name');
            $table->string('secondName');
            $table->string('website');
            $table->integer('phone');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        User::create([
            'role_id' => 2,
            'name' => 'Admin',
            'secondName' => 'Admin',
            'website' => 'example.com',
            'phone' => 123456789,
            'email' => 'admin@example.org',
            'password' => Hash::make('admin'),
        ]);

        User::create([
            'name' => 'User',
            'secondName' => 'User',
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
