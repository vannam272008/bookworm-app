<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;

class Book extends Model
{
    use HasFactory, HasApiTokens, Notifiable;

    public $timestamps = false;
    protected $table = 'book';

    public function category(){
        return $this->belongsTo(Category::class, 'category_id','id');
    }

    public function discounts(){
        return $this->hasMany(Discount::class,'book_id','id');
    }

    public function reviews(){
        return $this->hasMany(Review::class,'book_id','id');
    }

    public function author(){
        return $this->belongsTo(Author::class,'author_id','id');
    }

    public function scopeGroup($query){
        return $query
        ->leftJoin('review','review.book_id','book.id')
        ->leftJoin('discount','discount.book_id','book.id')
        ->groupBy('book.id','discount.id')
        ->select('book.*','discount.discount_price','discount.discount_start_date','discount.discount_end_date')
        ->withCount('reviews');
    }

    

    // public function scopePopular($query){
    //     return $query
    //     ->leftJoin('discount','discount.book_id','=','book.id')
    //     ->groupBy('book.id','discount.id')
    //     ->withCount('reviews');
    // }

    // public function scopeFilterBy($query){
    //     return $query
    //     ->leftJoin('discount','discount.book_id','=','book.id')
    //     ->groupBy('book.id','discount.id')
    //     ->withCount('reviews');
    // }
    
}
