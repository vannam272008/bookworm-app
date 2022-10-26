<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\Category;
use App\Models\Review;
use Illuminate\Support\Facades\Redis;
use App\Repositories\BookRepository;
use Symfony\Component\HttpFoundation\Response;

class BookAPIController extends Controller
{

    private $bookRepository;
    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $query = Book::group();
        $query = new BookCollection($query->paginate(5));
        return response()->json($query, Response::HTTP_OK);
    }

    public function filter(Request $request){
        try {
            $query = Book::group();
            $query = $this->bookRepository->filter($query, $request);
            return new BookCollection($query);
        } catch (\Throwable $th){
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    //sortFeaturedBooks
    public function sort(Request $request){
        try {
            $books = Book::group();
            $books = $this->bookRepository->sortFeaturedBooks($books, $request);
            return new BookCollection($books);
        } catch (\Throwable $th){
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->bookRepository->getById($id);
    }
}
