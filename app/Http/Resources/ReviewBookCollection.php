<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ReviewBookCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            // Config pagination
            'data' => $this->collection,
            'link' => [
                'prev_url'  => $this->previousPageUrl(),
                'next_url'  => $this->nextPageUrl(),
                'first_url' => $this->url(1),
                'last_url' => $this->url($this->lastPage())
            ],
            'meta' => [
                'total' => $this->total(),
                'per_page' => $this->perPage(),
                'current_page' => $this->currentPage(),
                'from' => $this->firstItem(),
                'to' => $this->lastItem(),
                'last_page' => $this->lastPage(),
            ],
        ];
    }
}
