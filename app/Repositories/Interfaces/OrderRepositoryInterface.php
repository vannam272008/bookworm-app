<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

use PhpParser\Builder\Interface_;

interface OrderRepositoryInterface
{
    public function store(Request $request, $userId);

}