<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'review';

    

    public function book(){
        return $this->belongsTo(Book::class);
    }

    public function scopeCountStar($query, $book){
        return $query
        ->where('book_id', $book)
        ->selectRaw("COUNT(CASE WHEN rating_start = 1 THEN 1 ELSE null END) as quantity_1_star")
        ->selectRaw("COUNT(CASE WHEN rating_start = 2 THEN 1 ELSE null END) as quantity_2_star")
        ->selectRaw("COUNT(CASE WHEN rating_start = 3 THEN 1 ELSE null END) as quantity_3_star")
        ->selectRaw("COUNT(CASE WHEN rating_start = 4 THEN 1 ELSE null END) as quantity_4_star")
        ->selectRaw("COUNT(CASE WHEN rating_start = 5 THEN 1 ELSE null END) as quantity_5_star")
        ->selectRaw("COUNT(rating_start) as quantity_star")
        ->selectRaw("ROUND(AVG(rating_start),2) as avg_star");
    }
}
