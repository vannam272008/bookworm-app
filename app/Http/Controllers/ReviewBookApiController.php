<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\ReviewBookCollection;
use App\Http\Resources\ReviewBookResource;
use App\Models\Book;
use App\Models\Review;
use App\Repositories\ReviewBookRepository;
use Illuminate\Http\Request;
use Throwable;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\TryCatch;

class ReviewBookApiController extends Controller
{
    private $reviewBookRepository;
    public function __construct(ReviewBookRepository $reviewBookRepository)
    {
        $this->reviewBookRepository = $reviewBookRepository;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $book)
    {
        return response()->json([
            'error' => 'Page Not Found'
        ], Response::HTTP_NOT_FOUND);
        // try {
        //     $bookDetail = Book::group()->findOrFail($book);
        //     $bookDetail = new BookResource($bookDetail);
        //     $reviews = Book::findOrFail($book)->reviews();
        //     $reviews = $this->reviewBookRepository->filter($reviews, $request);
        //     $reviews = new ReviewBookCollection($reviews);

        //     $starCountReviews = Review::countStar($book)->get();

            

        //     return response()->json([
        //         'book' => $bookDetail,
        //         'star_count_reviews' => $starCountReviews,
        //         'reviews' => $reviews
        //     ], Response::HTTP_OK);
        // } catch (Throwable $t){
        //     return response()->json([
        //         'error' => 'Server Error'
        //     ], Response::HTTP_INTERNAL_SERVER_ERROR);
        // }

        
    }

    public function filter(Request $request, $book){
        try {
            $params = request()->query();
            foreach($params as $param => $value){
                if ((!in_array($param, ['sort','star','items_per_page','page'])) or (!in_array($params['sort'],['asc','desc']))){
                    return response()->json([
                        'error' => 'Page Not Found'
                    ], Response::HTTP_NOT_FOUND);
                }
            }
            $bookDetail = Book::group()->findOrFail($book);
            $bookDetail = new BookResource($bookDetail);
            $reviews = Review::where('book_id', $book);
            $reviews = $this->reviewBookRepository->filter($reviews, $request);
            $reviews = new ReviewBookCollection($reviews);

            $starCountReviews = Review::countStar($book)->get();
            

            return response()->json([
                'book' => $bookDetail,
                'star_count_reviews' => $starCountReviews,
                'reviews' => $reviews,
            ], Response::HTTP_OK);

            

        } catch(Throwable $t){
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }

    // /**
    //  * Store a newly created resource in storage.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\Response
    //  */
    public function store(StoreReviewRequest $request, $book)
    {
        try {
            $$this->reviewBookRepository->createReviewBook($request, $book);
            return response()->json([
                'message' => 'Review created successfully'
            ], Response::HTTP_CREATED);

        } catch(Throwable $t){
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
    public function show($book, $reviewId)
    {
        try {
            $bookDetail = Book::group()->findOrFail($book);
            $bookDetail = new BookResource($bookDetail);

            $reviews = Book::findOrFail($book)->reviews()->findOrFail($reviewId);
            $reviews = new ReviewBookResource($reviews);

            return response()->json([
                'book' => $bookDetail,
                'reviews' => $reviews
            ], Response::HTTP_OK);
        } catch (Throwable $t){
            return response()->json([
                'error' => 'Server Error'
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
