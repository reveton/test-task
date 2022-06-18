<?php

namespace App\Http\Controllers;

use App\Client;

use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function store(ClientStoreRequest $request)
    {
        $input = $request->all();
        $client = Client::where('email',$input['email'])->first();
        if (isset($client->id)){
            return $this->sendError('This client already exists', '', 403);
        }
        $validator = Validator::make($input, [
            'email' => 'required',
            'name' => 'required',
            'phone' => 'required'
        ]);
        $client_input = [
            'email' => $input['email'],
            'name' => $input['name'],
            'phone' => $input['phone'],
            'geo' => json_encode(['city' => 'ZP', 'country' => 'Ukraine']),
            'ip' => $request->ip()
        ];
        $client = Client::create($client_input);


//        $blog = Blog::create($input);
//        return $this->sendResponse(new BlogResource($blog), 'Post created.');
//        return Order::create($request->all());
    }
}
