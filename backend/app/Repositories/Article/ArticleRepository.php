<?php
namespace App\Repositories\Article;

use App\Models\Article;
use App\Repositories\BaseRepository;

class ArticleRepository extends BaseRepository implements ArticleRepositoryInterface
{
    public function getModel()
    {
        return Article::class;
    }
}
