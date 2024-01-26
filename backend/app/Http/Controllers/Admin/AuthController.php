<?php

namespace App\Http\Controllers\Admin;

use App\Enums\AuthEnum;
use App\Enums\HttpCode;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Validator;

class AuthController extends Controller
{
    public function _construct()
    {
        $this->middleware('auth:api', ['expect' => ['login', 'register']]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'password_confirmation' => 'required|same:password'
        ], [
            'name.required' => "Tên không được trống",
            'name.unique' => "Tên đã bị trùng",
            'email.required' => "Email không được trống",
            'email.unique' => "Email đã bị trùng",
            'email.email' => "Email không đúng định dạng",
            'password.required' => "Mật khẩu không được trống",
            'password.min' => "Mật khẩu ít nhât 6 kí tự",
            'password_confirmation.same' => "Mật khẩu không khớp"
        ]);

        if ($validator->fails()) {
            return result_api(code: HttpCode::VALIDATION_FAIL_CODE, message: $validator->errors());
        }

        $user = User::create(array_merge($request->all(), ['password' => Hash::make($request->password)]));
        return result_api(HttpCode::CREATED_CODE, message: AuthEnum::REGISTER_SUCESS, data: ['user' => $user]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ], [
            'email.required' => "Email không được trống",
            'email.unique' => "Email đã bị trùng",
            'email.email' => "Email không đúng định dạng",
            'password.required' => "Mật khẩu không được trống",
            'password.min' => "Mật khẩu ít nhât 6 kí tự",
        ]);

        if ($validator->fails()) {
            return result_api(code: HttpCode::VALIDATION_FAIL_CODE, message: $validator->errors());
        }
        $token = Auth::attempt($validator->validated());
        if (!$token) {
            return result_api(code: HttpCode::AUTHENTICATION_FAIL_CODE, message: AuthEnum::LOGIN_FAILED);
        }
        $data = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60,
            'user' => Auth::user()
        ];
        return result_api(code: HttpCode::SUCCESS_CODE, message: AuthEnum::LOGIN_SUCESS, data: $data);
    }

    public function profile(Request $request)
    {
        return result_api(code: HttpCode::SUCCESS_CODE, message: AuthEnum::PROFILE_SUCESS, data: ["user" => Auth::user()]);
    }

    public function logout()
    {
        Auth::logout();
        return result_api(code: HttpCode::SUCCESS_CODE, message: AuthEnum::LOGOUT_SUCESS);
    }

    public function refresh()
    {
        $data = [
            'user' => Auth::user(),
            'token' => Auth::refresh()
        ];
        return result_api(code: HttpCode::SUCCESS_CODE, message: AuthEnum::REFRESH_SUCESS, data: $data);

    }

    public function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'old_password' => 'required',
            'password' => 'required|min:6|max:100',
            'confirm_password' => 'required|same:password'
        ], [
            'old_password' => "Vui lòng nhập mật khẩu cũ",
            'password.required' => "Mật khẩu không được trống",
            'password.min' => "Mật khẩu ít nhât 6 kí tự",
            'confirm_password.required' => "Mật khẩu nhập lại không được trống",
            'confirm_password.same' => "Mật khẩu nhập lại không khớp"
        ]);
        if ($validator->fails()) {
            return result_api(code: HttpCode::VALIDATION_FAIL_CODE, message: $validator->errors());
        }
        $user = $request->user();
        if (Hash::check($request->old_password, $user->password)) {
            $user->update([
                'password' => Hash::make($request->password)
            ]);
            return result_api(code: HttpCode::SUCCESS_CODE, message: AuthEnum::CHANGE_PASSWORD_SUCCESS);
        } else {
            return result_api(code: HttpCode::VALIDATION_FAIL_CODE, message: AuthEnum::NOT_MATCH_PASSWORD);
        }
    }
}
