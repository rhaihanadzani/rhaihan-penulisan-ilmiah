<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Holidays extends Model
{
    use HasFactory;
      protected $fillable =['uuid','name','last_holiday','is_active'];
        protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
       public function reports()
    {
        return $this->hasMany(Reports::class,'holiday_id');
    }


}
