<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class HttpCode extends Enum
{
    const SUCCESS_CODE = 200;
    const CREATED_CODE = 201;
    const NO_CONTENT = 204;
    const VALIDATION_FAIL_CODE = 400;
    const AUTHENTICATION_FAIL_CODE = 401;
    const NOT_ALLOW_CODE = 403;
    const NOT_FOUND_CODE = 404;
    const ERROR_EXCEPTION_CODE = 500;

}
