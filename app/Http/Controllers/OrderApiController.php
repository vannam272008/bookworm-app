<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderApiController extends Controller
{
    // public function store (Request $request){
    //     if ($request->method('POST')){
    //         DB::transaction(function(){
    //             $id = 1;
    //             $id_item = 0;
    //             $data_items = array();

    //             $number = DB::table('order')->max('id');
    //             if(!$number === null){
    //                 $id_item = $number + 1;
    //             }

    //             $final_id = DB::table('order_item')->max('id');
    //             if (!$final_id === null){
    //                 $id_item = $final_id + 1;
    //             }

    //             $credientials = request()->validate([
    //                 'book' => ['required','array'],
    //             ]);

    //             $order_amount = 0;

    //             foreach($credientials['book'] as $value){
    //                 $data_items[] = [
    //                     'id' => $id_item,
    //                     'order_id'  => $id,
    //                     'book_id' => $value['id'],
    //                     'quantity' => $value['quantity'],
    //                     'price' => $value['price']
    //                 ];
    //                 $order_amount += ($value['quantity']) * $value['price'];
    //                 $id_item ++;
    //             }

    //             DB::table('order')->insert([
    //                 'id' => $id,
    //                 'order_date' => Carbon::now()->timezone('Asia/Ho_Chi_Minh'),
    //                 'order_amount' => $order_amount
    //             ]);

    //             DB::table('order_item')->insert($data_items);

    //         }, 4);
    //     }
    // }
}
