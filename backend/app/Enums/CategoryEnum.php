<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class CategoryEnum extends Enum
{
    const CATEGORY_NOT_FOUND = 'Danh mục không tồn tại';
    const CATEGORY_SUCCESS = 'Lấy danh mục thành công';
    const CATEGORIES_SUCCESS = 'Lấy danh sách danh mục thành công';
    const CREATE_CATEGORY_SUCCESS = 'Tạo danh mục thành công';
    const UPDATE_CATEGORY_SUCCESS = 'Cập nhật danh mục thành công';
    const DELETE_CATEGORY_SUCCESS = 'Xóa danh mục thành công';
    const DELETE_CATEGORIES_SUCCESS = 'Xóa các danh mục thành công';

}
