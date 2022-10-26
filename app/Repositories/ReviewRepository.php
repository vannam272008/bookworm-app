<?php

namespace App\Repositories;

use App\Http\Resources\ReviewCollection;
use App\Models\Review;
use App\Repositories\Interfaces\ReviewRepositoryInterface;
use Illuminate\Http\Request;

class ReviewRepository implements ReviewRepositoryInterface{

    public function sort(Request $request){
        return $this->sortByDate($request);
    }

    protected function customPaginate(Request $request)
    {
        if ($request->items_per_page){
            return $request->items_per_page;
        }
        return config('app.items_per_page');
    }

    protected function sortByDate(Request $request){
        if ($request->sort){
            $reviews = Review::orderBy('review_date',$request->sort)->paginate($this->customPaginate($request));
            return new ReviewCollection($reviews);
        }
        $reviews = Review::orderBy('review_date','asc')->paginate($this->customPaginate($request));
        return new ReviewCollection($reviews);
    }

}