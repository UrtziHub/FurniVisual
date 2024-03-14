<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
use App\Models\Rol;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            OrderSeeder::class,
            CartSeeder::class,
        ]);

        for ($j = 0; $j < 10; $j++) {
            $category = Category::factory()->create();
            $product = Product::factory()->create([
                'category_id' => $category->id,
            ]);
            Review::factory()->create([
                'product_id' => $product->id,
            ]);
        }

        /* for ($i = 0; $i < 10; $i++) {
             $user = User::factory()->create();
             $cliente = Cliente::factory()->create([
                 'user_id' => $user->id,
             ]);

             $num_pedidos = rand(0, 3);

             for ($j = 0; $j < $num_pedidos; $j++) {
                 $pedido = Pedido::factory()->create([
                     'cliente_id' => $cliente->id,
                 ]);
                 $num_items = rand(0, 3);


                 for ($j = 0; $j < $num_items; $j++) {
                     $item = Item::factory()->create();
                     $cantidad = rand(1, 20);
                     $pedido->items()->attach($item->id, ['cantidad' => $cantidad]);

                 }

             }
         }*/
    }
}
