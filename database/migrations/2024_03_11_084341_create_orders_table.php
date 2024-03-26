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
            $table->string('order_number');
            $table->integer('tax_number');
            $table->integer('zip');
            $table->integer('phone');
            $table->string('email');
            $table->text('notes')->nullable();
            $table->enum('status', ['unpaid', 'pending', 'processing', 'completed', 'canceled'])->default('pending');
            $table->decimal('total_price', 6, 2);
            $table->string('session_id');
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->integer('cart_id')->constrained('cart')->onDelete('cascade');
            $table->integer('ship_address_id')->nullable();
            $table->integer('fact_address_id')->nullable();
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
