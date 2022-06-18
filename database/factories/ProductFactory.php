<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word(),
        'description' => $faker->sentence(),
        'price' => $faker->randomFloat(5, 0, 1000),
        'manufacturer' => $faker->word(),
        'manager_id' => $faker->numberBetween(1, 5)
    ];
});
