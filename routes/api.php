<?php

use App\Http\Controllers\BookApiController;
use App\Http\Controllers\FilterApiController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\OrderApiController;
use App\Http\Controllers\ReviewBookApiController;
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

Route::post('login', [LoginController::class, 'login'])->name('api.login');
Route::get('books/{book}/reviews/filter',[ReviewBookApiController::class, 'filter']);
Route::get('books/filter',[BookApiController::class,'filter']);
Route::get('books/sort', [BookApiController::class,'sort']);
Route::apiResource('books/{book}/reviews',ReviewBookApiController::class);
Route::apiResource('books', BookApiController::class);
Route::apiResource('filters',FilterApiController::class)->only('index');
Route::apiResource('orders',OrderApiController::class)->only('index');

Route::middleware(['auth:sanctum'])->group(function () {
    // Route::apiResource('books', BookApiController::class);
    
    
    Route::delete('login', [LoginController::class, 'logout'])->name('api.logout');
});

