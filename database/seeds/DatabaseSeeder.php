<?php

use Illuminate\Database\Seeder;
use App\Manager;
use App\Product;
use App\Order;
use App\Client;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        factory(Manager::class, 5)->create();
//        factory(Product::class, 10)->create();
//        factory(Client::class, 10)->create();
        factory(Order::class, 10)->create();
        // $this->call(UserSeeder::class);
    }
}
