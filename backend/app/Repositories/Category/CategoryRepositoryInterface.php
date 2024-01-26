<?php
namespace App\Repositories\Category;

use App\Repositories\RepositoryInterface;
use Illuminate\Http\Request;

interface CategoryRepositoryInterface extends RepositoryInterface
{
    public function getAllWithPagination(Request $request);
    public function deleteByIds($ids);
}
