<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Author;
use Illuminate\Http\Response;

class FilterApiController extends Controller
{
    public function index(){
        try {
            $categories = Category::orderBy('category_name')->get();
            $authors = Author::orderBy('author_name')->get();
            $stars = [1,2,3,4,5];
            return response()->json([
                'categories' => $categories,
                'authors' => $authors,
                'stars' => $stars
            ], Response::HTTP_OK);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
