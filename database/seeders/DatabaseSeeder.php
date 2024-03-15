<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Review;
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
        /*$this->call([
            OrderSeeder::class,
            CartSeeder::class,
        ]);*/


        Category::create([
            'name' => 'Centre Tables',
            'description' => 'Center tables are not only a practical piece of furniture, but also an important decorative element that adds character to any interior. Thanks to its versatility and diversity of design, it is an excellent investment, being both a functional and aesthetic adding to the home environment.',
            'image' => 'centre_tables.jpg',
        ]);

        Category::create([
            'name' => 'Tables and Chairs',
            'description' => 'Dining tables and chairs are the heart of this room, being not only the place where meals are eaten, but also the center of family gatherings and conversations. Their choice is crucial to the functionality and aesthetics of this place.',
            'image' => 'tables_and_chairs.jpg',
        ]);

        Category::create([
            'name' => 'Fireplaces',
            'description' => 'The fireplace is not only a source of heat, but also the heart of the home, which creates a cozy atmosphere and encourages spending time with family and friends. Its variety of styles, materials and functions make it a unique and desirable addition to any home.',
            'image' => 'fireplaces.jpg',
        ]);

        Category::create([
            'name' => 'Kitchens',
            'description' => 'Kitchen cabinetry is a key element in the organization of kitchen space, providing functionality, aesthetics and convenience. Properly designed and constructed kitchen built-ins allow for efficient use of space, creating a kitchen that is not only stunning in design, but also conductive to daily cooking and family integration.',
            'image' => 'kitchens.jpg',
        ]);

        Category::create([
            'name' => 'Leisure Furniture',
            'description' => 'Lounge furniture is an integral part of any home, providing comfort, relaxation and a place to spend time with family and friends. They usually consist of sofas, armchairs, corner sofas or couches, offering a variety of seating options that adapt to the needs and preferences of users.',
            'image' => 'leisure_furniture.jpg',
        ]);

        Category::create([
            'name' => 'Interiors',
            'description' => 'Interiors and their design are extremely important elements in our lives, effecting our well-being, comfort and creativity. Interior design is the art of creating a harmonious, functional and aesthetically pleasing environment that reflects our preferences, lifestyle and individual taste.',
            'image' => 'interiors.webp',
        ]);

        for ($j = 0; $j < 10; $j++) {
            $num_ramdom = rand(1, 6);
            $product = Product::factory()->create([
                'category_id' => $num_ramdom,
            ]);
            Review::factory()->create([
                'product_id' => $product->id,
                'user_id' => 2
            ]);
        }

    }
}
