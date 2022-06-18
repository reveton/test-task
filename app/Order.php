<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'client_id', 'product_id', 'uuid',
    ];

    public function product(){
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function client(){
        return $this->belongsTo(Client::class, 'client_id');
    }
}
