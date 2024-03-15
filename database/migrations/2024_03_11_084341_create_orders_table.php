<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->integer('ship_addresd_id')->nullable();
            $table->integer('fact_address_id')->nullable();
            $table->integer('tax_number');
            $table->integer('cart_id')->constrained('cart')->onDelete('cascade');
            $table->integer('zip');
            $table->integer('phone');
            $table->string('email');
            $table->text('notes')->nullable();
            $table->string('number');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
