<?php

namespace App\Http\Controllers;

use App\Services\ClientService;
use App\Services\OrderService;
use Illuminate\Http\Request;
use App\Order;
use Validator;

class OrderController extends Controller
{
    protected $clientService, $orderService;
    function __construct(ClientService $clientService, OrderService $orderService){
        $this->clientService = $clientService;
        $this->orderService = $orderService;
    }

    public function index()
    {
        $orders = Order::with('product', 'client')->get();
        if (count($orders))
            return $this->sendResponse($orders, 'Orders fetched');
        return $this->sendError('Orders not found');
    }

    public function showByProduct($id)
    {
        $orders = Order::where('product_id', $id)->with('product', 'client')->get();
        if (count($orders))
            return $this->sendResponse($orders, 'Orders fetched');
        return $this->sendError('Orders not found');
    }

    public function showByManager($id)
    {
        $orders = Order::query()
            ->with('product', 'client')
            ->join('products', 'products.id', '=', 'orders.product_id')
            ->join('managers', 'managers.id', '=', 'products.manager_id')
            ->select('orders.*', 'managers.id')
            ->where('managers.id', $id)
            ->paginate(3);
        if (count($orders)) {
            return $this->sendResponse($orders,
                'Orders fetched');
        }
        return $this->sendError('Orders not found');
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $client = $this->clientService->findOrCreateByEmail(
            $input['email'],
            $input['name'],
            $input['phone'],
            $request->ip()
        );
        $order = $this->orderService->make($client->id, $input['product_id']);
        if (!isset($order->id)){
            return $this->sendError($order, '', 403);
        }
        return $this->sendResponse($order,
            'Order created');
    }

}
