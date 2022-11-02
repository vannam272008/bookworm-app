<?php

namespace App\Repositories\Interfaces;

use Illuminate\Http\Request;

interface ReviewBookRepositoryInterface {
    public function sort($query, $value);
    public function filter($query, $value);
}