<?php

namespace App\Repositories;

use App\Repositories\Interfaces\BookRepositoryInterface;
use App\Models\Book;
use App\Http\Resources\BookResource;
use Illuminate\Support\Str;

class BookRepository implements BookRepositoryInterface
{

    public function sort($query, $value){

        if ($value == 'sale'){
            return $this->sortSale($query);
        }
        if ($value == 'popular'){
            return $this->sortPopular($query);
        }
        if ($value == 'price'){
            return $this->sortPrice($query, $value);
        }
        return $this->sortSale($query);

        // switch ($value) {
        //     case 'sale':
        //         return $this->sortSale($query);
        //     case 'popular':
        //         return $this->sortPopular($query);
        //     case 'price':
        //         return $this->sortPrice($value, $query);
        //     default:
        //         return $this->sortSale($query);
        // }

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

        if (!$request->sort){
            $this->sortSale($query);
        }
        // return $query->paginate(5);
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
    }

    public function customPaginate($request)
    {
        if ($request->items_per_page){
            return $request->items_per_page;
        }
        return config('app.items_per_page');
    }
    

    protected function sortSale($query)
    {
        return $query
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN book.book_price - discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN book.book_price - discount.discount_price
        ELSE 0
        END DESC')
        ->orderBy('book_price','ASC');
    }

    protected function sortPopular($query){
        return $query->orderBy('reviews_count','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC');
    }

    protected function sortPrice($value, $query){
        return $query->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ' . $value);
    }

    protected function sortRecommend($query){
        return $query
        ->selectRaw('COALESCE(ROUND(AVG(review.rating_start),2),0) as avg_star')
        ->orderBy('avg_star','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC')
        ->limit(config('app.limited_books_recommend'))->get();
    }

    protected function sortTopPopular($query){
        $query = $this->sortPopular($query)->limit(config('app.limited_books_popular'))->get();
        return $query;
    }

    protected function sortTopSale($query){
        $books = $this->sortSale($query)->limit(config('app.limited_books_sale'))->get();
        return $books;
    }

    protected function filterCategory($query, $value){
        return $query->where('book.category_id',$value);
    }

    protected function filterAuthor($query, $value){
        return $query->where('author_id',$value);
    }

    protected function filterStar($query,$value){
        return $query
        ->selectRaw('COALESCE(ROUND(AVG(review.rating_start),2),0) as avg_star')
        ->havingRaw('COALESCE(ROUND(AVG(review.rating_start),2),0) >= ?',[$value])
        ->orderBy('avg_star','desc')
        ->orderByRaw('CASE
        WHEN (discount.discount_end_date IS NULL AND DATE(NOW()) >= discount.discount_start_date) THEN discount.discount_price
        WHEN (discount.discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount.discount_start_date AND DATE(NOW()) <= discount.discount_end_date ) ) THEN discount.discount_price
        ELSE book.book_price
        END ASC');
    }
}