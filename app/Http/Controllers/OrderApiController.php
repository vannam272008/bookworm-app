<?php

namespace App\Http\Controllers;

use App\Repositories\OrderRepository;
use Illuminate\Http\Request;

class OrderApiController extends Controller
{

    private $orderRepository;
    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }

    public function store(Request $request, $userId){
        if ($request->method('POST')){
            $this->orderRepository->store($request, $userId);
        }
    }
}
