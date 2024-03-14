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
           // $table->boolean('is_admin')->default(0);
            $table->rememberToken();
            $table->timestamps();
        });

        /*User::create([
            'role_id' => 1, // El ID del rol de administrador
            'name' => 'Admin',
            'secondName' => 'Admin', // Segundo nombre del administrador
            'website' => 'example.com', // El sitio web del administrador
            'phone' => 123456789, // Número de teléfono del administrador
            'email' => 'admin@example.org', // Correo electrónico del administrador
            'password' => Hash::make('admin'), // La contraseña del administrador (se encripta automáticamente)
        ]);*/
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
