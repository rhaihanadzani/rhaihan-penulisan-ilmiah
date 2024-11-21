<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class CardPayment extends Model
{
    use HasFactory;
      protected $fillable =['uuid','name','price'];

        protected static function booted()
            {
                static::creating(function ($model) {
                    if (empty($model->uuid)) {
                        $model->uuid = (string) Str::uuid();
                    }
                });
            }


    public function payments()
    {
        return $this->hasMany(Payment::class, 'card_payments_id');
    }

    public function invoice()
    {
        return $this->hasMany(Invoice::class);
    }
}
