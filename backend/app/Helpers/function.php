<?php
if (!function_exists('result_api')) {
    function result_api($code, $message = null, $data = null)
    {
        return response()->json([
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ], $code);
    }
}
