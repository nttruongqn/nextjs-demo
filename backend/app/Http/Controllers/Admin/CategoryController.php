<?php

namespace App\Http\Controllers\Admin;

use App\Enums\CategoryEnum;
use App\Enums\HttpCode;
use App\Http\Controllers\Controller;
use App\Repositories\Category\CategoryRepositoryInterface;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $category_repo;

    public function __construct(CategoryRepositoryInterface $category_repo)
    {
        $this->category_repo = $category_repo;
    }

    public function getAll(Request $request)
    {
        $data = $this->category_repo->getAllWithPagination($request);
        return result_api(code: HttpCode::SUCCESS_CODE, message: CategoryEnum::CATEGORIES_SUCCESS, data: $data);
    }

    public function getById(Request $request)
    {
        $data = $this->category_repo->find($request->id);
        return result_api(code: HttpCode::SUCCESS_CODE, message: CategoryEnum::CATEGORY_SUCCESS, data: $data);
    }

    protected function checkExistedId($id)
    {
        $category = $this->category_repo->find($id);
        if ($category === null) {
            return result_api(code: HttpCode::NOT_FOUND_CODE, message: CategoryEnum::CATEGORY_NOT_FOUND);
        }
    }

    public function create(Request $request)
    {
        try {
            $data = $request->all();
            $data['slug'] = str_slug($data['name']);
            $this->category_repo->create($data);
            return result_api(HttpCode::CREATED_CODE, message: CategoryEnum::CREATE_CATEGORY_SUCCESS, data: $data);
        } catch (\Exception $e) {
            return result_api(code: $e->getCode(), message: $e->getMessage());
        }
    }

    public function edit(Request $request, $id)
    {
        try {
            $checkExisted = $this->checkExistedId($id);
            if ($checkExisted) {
                return $checkExisted;
            }
            $data = $request->all();
            $data['slug'] = str_slug($data['name']);
            $this->category_repo->update($id, $data);
            return result_api(HttpCode::SUCCESS_CODE, message: CategoryEnum::UPDATE_CATEGORY_SUCCESS);
        } catch (\Exception $e) {
            return result_api(code: $e->getCode(), message: $e->getMessage());
        }
    }

    public function delete(Request $request, $id)
    {
        try {
            $checkExisted = $this->checkExistedId($id);
            if ($checkExisted) {
                return $checkExisted;
            }
            $this->category_repo->delete($id);
            return result_api(HttpCode::SUCCESS_CODE, message: CategoryEnum::DELETE_CATEGORY_SUCCESS);
        } catch (\Exception $e) {
            return result_api(code: $e->getCode(), message: $e->getMessage());
        }
    }

    public function deleteByIds(Request $request)
    {
        try {
            if (!empty($request->ids)) {
                $this->category_repo->deleteByIds($request->ids);
                return result_api(HttpCode::SUCCESS_CODE, message: CategoryEnum::DELETE_CATEGORIES_SUCCESS);
            }
        } catch (\Exception $e) {
            return result_api(code: $e->getCode(), message: $e->getMessage());
        }
    }
}
