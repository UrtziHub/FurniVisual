<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'imageFiles', 'numProducts', 'numPerspective', 'hasModel', '3DModel', 'deadline', 'additionalInfo'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'imageFiles' => 'array',
        '3DModel' => 'array',
        'deadline' => 'datetime',
    ];
}
