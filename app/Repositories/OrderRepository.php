<?php

namespace App\Repositories;

use App\Models\Review;
use App\Repositories\Interfaces\OrderRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class OrderRepository implements OrderRepositoryInterface {



    public function store(Request $request, $userId){
            DB::beginTransaction();
            $data_books_order = array();
            $oldest_order_id = DB::table('order')->max('id');
            $oldest_order_item_id = DB::table('order_item')->max('id');
            $new_order_id =  $oldest_order_id === null ? 1 :  $oldest_order_id + 1;
            $new_order_item_id = !is_null($oldest_order_item_id) ?  $oldest_order_item_id + 1 : 1;
            $credentials = request()->validate([
                'books' => ['required', 'array'],
            ]);
            $order_amount = 0;
            foreach ($credentials['books'] as $book) {
                $data_books_order[] = [
                    'id' => $new_order_item_id,
                    'order_id' => $new_order_id,
                    'book_id' => $book['book_id'],
                    'quantity' => $book['quantity'],
                    'price' => $book['final_price']
                ];
                $order_amount += ($book['quantity'] * $book['final_price']);
                $new_order_item_id++;
            };
    
            DB::table('order')->insert([
                'id' => $new_order_id,
                'user_id' => (int)$userId,
                'order_date' => Carbon::now()->timezone('Asia/Ho_Chi_Minh'),
                'order_amount' => $order_amount
            ]);
            DB::table('order_item')->insert($data_books_order);
            DB::commit();
        
    }


}