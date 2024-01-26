<?php
namespace App\Repositories\Category;

use App\Models\Category;
use App\Repositories\BaseRepository;
use Illuminate\Http\Request;

class CategoryRepository extends BaseRepository implements CategoryRepositoryInterface
{
    public function getModel()
    {
        return Category::class;
    }

    public function getAllWithPagination(Request $request)
    {
        return $this->model->paginate(4)->appends($request->all());
        ;
    }


    public function deleteByIds($ids)
    {
        return $this->model::whereIn('id', $ids)->delete();
    }

}
