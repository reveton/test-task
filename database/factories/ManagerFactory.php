<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Manager;
use Faker\Generator as Faker;

$factory->define(Manager::class, function (Faker $faker) {
    return [
        'api_key' => Str::random(100),
    ];
});
