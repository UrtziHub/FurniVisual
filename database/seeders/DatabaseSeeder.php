<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            RolSeeder::class,
            ProductSeeder::class,
            CategorySeeder::class,
            ReviewSeeder::class,
            OrderSeeder::class,
            CartSeeder::class,
        ]);
    }
}
