<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use Illuminate\Http\Request;
use App\Models\Book;
use App\Repositories\BookRepository;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class BookApiController extends Controller
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
        $books = Book::group()->get();
        // $books = new BookCollection($books);
        return new BookCollection($books);
        // return response()->json($books, Response::HTTP_OK);
    }


    public function filter(Request $request){
        try {
            $books = Book::group();
            $books = $this->bookRepository->filter($books, $request);
            // $books = new BookCollection($books);
            return new BookCollection($books);
            // return response()->json($books,Response::HTTP_OK);
        } catch (Throwable $t){
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
            // $books = new BookCollection($books);
            return new BookCollection($books);
            // return response()->json(
            //     ['books' => $books],
            //     Response::HTTP_OK);
        } catch (Throwable $t){
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
        try {
            $book = Book::group()
            ->selectRaw('COALESCE(ROUND(AVG(CAST(rating_start as INT)),2),0) as avg_stars')
            ->findOrFail($id);
            return new BookResource($book);
            // $book = new BookResource($book);
            // return response()->json(
            //     ['book' => $book],
            //     Response::HTTP_OK);
        } catch (Throwable $t){
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        
    }
}
