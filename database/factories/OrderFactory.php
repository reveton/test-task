<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Order;
use Faker\Generator as Faker;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'uuid' => $faker->uuid,
        'client_id' => $faker->unique()->numberBetween(1, 10),
        'product_id' => $faker->numberBetween(1, 10)
    ];
});
