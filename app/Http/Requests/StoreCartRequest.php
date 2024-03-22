<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCartRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'product_id' => 'required',
            'images' => 'required|array|max:5',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
            'model' => 'nullable|array|max:5',
            //'model.*' => 'mimes:jpeg,png,jpg,gif|max:2048',
            'model.*' => 'mimes:stl,obj,fbx,dae,3ds,x3d,blend,ply|max:1048576',
            'deadline' => 'nullable|date',
            'perspective' => 'required|integer',
            'products_number' => 'required|integer',
            'information' => 'nullable|string',

            // https://es.stackoverflow.com/questions/400824/c%C3%B3mo-subir-archivos-grandes-200-mb-en-laravel-alojado-en-google-cloud
        ];
    }
}
