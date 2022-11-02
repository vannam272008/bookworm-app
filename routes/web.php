<?php

use App\Http\Controllers\BookApiController;
use App\Http\Controllers\BookController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ReviewBookApiController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->where('path', '[a-zA-Z0-9-/]+');

// // Route::get('books',[
// //     BookApiController::class,"index"
// // ]);

Route::post('session', [LoginController::class, 'store'])->name('login');
Route::delete('session', [LoginController::class, 'destroy'])->name('logout');


Route::prefix('admin')->group(function () {
    Route::name('admin.')->group(function () {
        // Route::get('books/filter',[BookApiController::class,'filter']);
        // Route::get('books/sort', [BookApiController::class,'sort']);
        // Route::get('books/{book}/reviews/filter', [BookApiController::class, 'filter']);
        // Route::resource('books', BookApiController::class);
        // Route::resource('reviews',ReviewBookApiController::class);
        // Route::resource('books.reviews',ReviewBookApiController::class);
    });
    
});
