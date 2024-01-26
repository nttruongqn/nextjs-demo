<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory, HasUuids;
    public $incrementing = false;
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
