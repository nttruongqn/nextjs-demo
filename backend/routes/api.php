<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh-token', [AuthController::class, 'refresh']);
    Route::post('change-password', [AuthController::class, 'changePassword']);
});

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'admin'], function () {
    // Các route yêu cầu xác thực JWT
    Route::group(['prefix' => 'categories'], function () {
        Route::get('', [CategoryController::class, 'getAll']);
        Route::get('{id}', [CategoryController::class, 'getById']);
        Route::post('create', [CategoryController::class, 'create']);
        Route::put('edit/{id}', [CategoryController::class, 'edit']);
        Route::delete('delete/{id}', [CategoryController::class, 'delete']);
        Route::delete('delete-by-ids', [CategoryController::class, 'deleteByIds']);
    });
});



