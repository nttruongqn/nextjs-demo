<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class AuthEnum extends Enum
{
    const REGISTER_SUCESS = 'Tạo tài khoản thành công';
    const REGISTER_FAILED = 'Tạo tài khoản thất bại';
    const LOGIN_SUCESS = 'Đăng nhập thành công';
    const LOGIN_FAILED = 'Đăng nhập thất bại';
    const PROFILE_SUCESS = 'Lấy thông tin user thành công';
    const LOGOUT_SUCESS = 'Đăng xuất thành công';
    const REFRESH_SUCESS = 'Refresh token thành công';
    const CHANGE_PASSWORD_SUCCESS = 'Đổi mật khẩu thành công';
    const NOT_MATCH_PASSWORD = 'Mật khẩu không khớp';

}
