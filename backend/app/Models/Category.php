<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory, HasUuids;
    public $incrementing = false;
    protected $guarded = [];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }


}
