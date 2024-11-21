<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Bulans extends Model
{


    use HasFactory;
    protected $fillable =['uuid','nama'];
    protected static function booted()
        {
            static::creating(function ($model) {
                if (empty($model->uuid)) {
                    $model->uuid = (string) Str::uuid();
                }
            });
        }



     public function attendace()
    {
        return $this->hasMany(Attendances::class);
    }
}
