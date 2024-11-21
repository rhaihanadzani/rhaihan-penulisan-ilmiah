<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Reports extends Model
{
    use HasFactory;
      protected $fillable =['uuid','holiday_id','user_id','title','description','image','murajaah'];
        protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
       public function holiday()
    {
        return $this->belongsTo(Holidays::class,'holiday_id', 'id');
    }
       public function user()
    {
        return $this->belongsTo(User::class,'user_id', 'id');
    }
}
