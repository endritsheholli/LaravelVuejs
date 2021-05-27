<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Lang;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function respondWithSuccess($data, $message = '', $status = 'success')
    {
        $dataresponse = gettype($data) == 'object' ? $data->toArray() : $data;
        return new JsonResponse([
            'message' => $message,
            'status' => $status,
            'response' => $dataresponse,
        ]);
    }

    public function respondWithError($message = '', $status = 'failed')
    {
        return new JsonResponse([
            'message' => $message,
            'status' => $status,
        ]);
    }

    public function respondWithException($message = '')
    {
        return $this->respondWithError($message, 'exception');
    }

    public function getCurrentLanguage()
    {
        $locale = Lang::getLocale();

        $locales = config('app.locales');
        $locale = substr($locale, 0, strpos($locale, ',') ?: strlen($locale));

        if (array_key_exists($locale, $locales)) {
            return $locale;
        }

        if (array_key_exists($locale, $locales)) {
            return $locale;
        }

        $locale = substr($locale, 0, 2);
        if (array_key_exists($locale, $locales)) {
            return $locale;
        }
    }
}
