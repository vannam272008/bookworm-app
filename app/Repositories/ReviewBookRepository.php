<?php

namespace App\Repositories;

use App\Http\Resources\ReviewBookCollection;
use App\Models\Review;
use App\Repositories\Interfaces\ReviewBookRepositoryInterface;
use App\Repositories\BookRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Requests\StoreReviewRequest;
use Illuminate\Support\Carbon;

class ReviewBookRepository implements ReviewBookRepositoryInterface{

    private $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    public function sort($query, $value){
        if ($value == 'desc'){
            return $query->orderBy('review_date','desc');
        }
        if ($value == 'asc'){
            return $query->orderBy('review_date','asc');
        }
        
    }

    public function filter($query, $request){
        $params = $request->all();
        
        foreach ($params as $param => $value){
            $methodFilter = 'filter' . Str::studly($param);
            $methodSort = $param;
            if ($value === '') {
                continue;
            }
            if (method_exists($this, $methodFilter)){
                $this->{$methodFilter}($query, $value);
            }
            if (method_exists($this, $methodSort)){
                $this->{$methodSort}($query, $value);
            }
            
            continue;
        }

        // if (!$request->sort){
        //     $this->sort($query, '');
        // }
        // // return $query->paginate(5)->appends(request()->query());
        return $query->paginate($this->customPaginate($request))->appends(request()->query());
    }


    protected function filterStar($query, $value){
        if ($value == 0){
            return $query->where('rating_start','>=',$value);
        }
        return $query->where('rating_start','=',$value);
    }

    public function customPaginate(Request $request){
        return $this->bookRepository->customPaginate($request);
    }

    public function createReviewBook(StoreReviewRequest $request, $book){
        $request->validated($request->all());
        $data = $request->all();
        
        $review = new Review();
        $review->book_id = $book;
        $review->review_title = $data['review_title'];
        $review->review_details = $data['review_details'];
        $review->rating_start = $data['rating_start'];
        $review->review_date = Carbon::now()->timezone('Asia/Ho_Chi_Minh');
        $review->save();
        
    }


}