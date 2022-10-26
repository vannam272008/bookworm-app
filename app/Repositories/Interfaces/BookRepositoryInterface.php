<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

use PhpParser\Builder\Interface_;

interface BookRepositoryInterface
{
    // public function filerByOnSale(Request $request);
    public function getById($id);
    // public function customPaginate(Request $request);
    public function filter($query,Request $request);
    public function sort($query,Request $request);
    public function customPaginate($request);
    // public function sortReview(Request $request);
}