<?php

namespace App\Services;

use App\Client;
/**
 * Class ClientService.
 */
class ClientService
{
    public function findOrCreateByEmail($email, $name, $phone, $ip){
        return Client::firstOrCreate([
                'email' => $email
            ],[
                'email' => $email,
                'name' => $name,
                'phone' => $phone,
                'geo' => $this->getGeo(),
                'ip' => $ip
        ]);
    }

    private function getGeo(){
        return json_encode(['country' => 'Ukraine', 'city' => 'Kiev']);
    }
}
