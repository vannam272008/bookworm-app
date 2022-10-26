<?php

namespace App\Repositories;

use App\Repositories\Interfaces\BookRepositoryInterface;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Illuminate\Support\Str;

class BookRepository implements BookRepositoryInterface
{

    public function sort($query, $value){

        switch ($value) {
            case 'sale':
                return $this->sortSale($query);
            case 'popular':
                return $this->sortPopular($query);
            default:
                return $this->sortPrice($value, $query);
        }
        return $this->sortSale($query);

            
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
        return $query->paginate($this->customPaginate($request))->appends(request()->query());
    }

    public function sortFeaturedBooks($query, $request){
        $sort = $request->sort;
        if ($sort == 'top_popular'){
            return $this->sortTopPopular($query);
        }
        
        if ($sort == 'top_sale'){
            return $this->sortTopSale( $query);
        }

        if ($sort == 'recommend'){
            return $this->sortRecommend($query);
        }

        return $this->sortRecommend($query);
    }

    public function getById($id)
    {
        $book = Book::find($id)->loadCount('reviews');
        return new BookResource($book);
    }

    public function customPaginate($request)
    {
        if ($request->items_per_page){
            return $request->items_per_page;
        }
        return config('app.items_per_page');
    }
    

    public function sortSale($query)
    {
        return $query
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN book.book_price - discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN book.book_price - discount.discount_price
        ELSE 0
        END DESC')
        ->orderBy('book_price','ASC');
    }

    public function sortPopular($query){
        return $query->orderBy('reviews_count','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC');
    }

    public function sortPrice($value, $query){
        return $query->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ' . $value);
    }

    public function sortRecommend($query){
        return $query
        ->selectRaw('COALESCE(ROUND(AVG(CAST(review.rating_start as INT)),2),0) as avg_star')
        ->orderBy('avg_star','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC')
        ->limit(config('app.limited_books_recommend'))->get();
    }

    public function sortTopPopular($query){
        $query = $this->sortPopular($query)->limit(config('app.limited_books_popular'))->get();
        return $query;
    }

    public function sortTopSale($query){
        $books = $this->sortSale($query)->limit(config('app.limited_books_sale'))->get();
        return $books;
    }

    // public function sortDesc($request){
    //     $books = Book::group()
    //     ->orderByRaw('CASE
    //     WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
    //     WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
    //     ELSE book.book_price
    //     END DESC')
    //     ->paginate($this->customPaginate($request))->appends(request()->query());
    //     return new BookCollection($books);
    // }

    public function filterCategory($query, $value){
        // ->paginate($this->customPaginate($request))->appends(request()->query());
        return $query->where('book.category_id',$value);
    }

    public function filterAuthor($query, $value){
        return $query->where('author_id',$value);
    }

    public function filterStar($query,$value){
        return $query
        ->selectRaw('COALESCE(ROUND(AVG(CAST(review.rating_start as INT)),2),0) as avg_star')
        ->havingRaw('COALESCE(ROUND(AVG(CAST(review.rating_start as INT)),2),0) >= ?',[$value])
        ->orderBy('avg_star','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC');
    }

    

    
    

    // public function discountPrice(){
    //     return Discount::select('discount_price')->where('book_id','=',$this->id)->where(function ($query) {
    //         $query->where('discount_end_date','>=',now())
    //               ->orWhere('discount_end_date','>=',now());
    //     })->get();
    // }

    

    // public function sortPrice($sort)
    // {
    //     $books = Book::orderBy('book_price',$sort)->paginate(config('app.items_per_page'));
    //     return new BookCollection($books);
    // }
    
    // public function sortReview($sort){
    //     $books = Book::orderBy('id')->paginate(config('app.items_per_page'));
    //     return new BookCollection($books->loadCount('reviews')->sortByDesc('reviews_count'));
    // }
}