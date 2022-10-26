<?php

use App\Http\Controllers\BookAPIController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\CategoryApiController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ReviewApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('session', [LoginController::class, 'login'])->name('api.login');
// Route::post('session', [LoginController::class, 'store'])->name('login');
// Route::delete('session', [LoginController::class, 'destroy'])->name('logout');
// Route::apiResource('books', BookAPIController::class);
// // Route::get('books', BookController::class);
Route::get('books/filter',[BookAPIController::class,'filter']);
Route::get('books/sort', [BookAPIController::class,'sort']);
Route::apiResource('books', BookAPIController::class);
Route::apiResource('reviews',ReviewApiController::class);
Route::middleware(['auth:sanctum'])->group(function () {
    
    // Route::apiResource('books',BookAPIController::class,'sortByPriceASC');
    Route::delete('session', [LoginController::class, 'logout'])->name('api.logout');
});

