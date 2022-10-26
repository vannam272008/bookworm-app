<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DetailBookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $sub_price = 0;
        if ($this->discount_price != null){
            if ($this->discount_end_date == null || $this->discount_end_date >= now()->format('Y-m-d')){
                if ($this->discount_start_date <= now()->format('Y-m-d')){
                    $sub_price = round($this->book_price - $this->discount_price,2);
                }
            }
        }
        else {
            $sub_price = 0;
        }
        
        $final_price = ($this->discount_price && $sub_price != 0) ? $this->discount_price : $this->book_price;
        


        return [
            'id' => $this->id,
            'category' => $this->category,
            'author' => $this->author,
            'book_title' => $this->book_title,
            'book_summary' => $this->book_summary,
            'book_price' => (float)$this->book_price,
            'sub_price' => $sub_price,
            'final_price' => (float)$final_price,
            'discount_start_date' => $this->discount_start_date,
            'discount_end_date' => $this->discount_end_date,
            'book_cover_photo' => $this->book_cover_photo,
            'review_count' => $this->reviews_count,
            'avg_star' => $this->avg_star,
            // 'reviews' => $this->reviews,
        ];
    }
}
