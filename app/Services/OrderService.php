<?php

namespace App\Services;

use App\Order;
use Validator;
use Illuminate\Support\Str;

/**
 * Class OrderService.
 */
class OrderService
{
    function make($client_id, $product_id){
        $uuid = Str::uuid()->toString();
        $input = [ 'client_id' => $client_id, 'product_id' => $product_id, 'uuid' => $uuid];
        $order = Order::where('client_id', $client_id)->first();
        if ($order)
            return 'This client already has an order';
        $validator = Validator::make($input, [
            'product_id' => 'required|integer',
            'client_id' => 'required|integer',
            'uuid' => 'required|string|max:100'
        ]);

        if ($validator->fails()){
            return $validator->errors();
        }
        return Order::create($input);
    }
}
