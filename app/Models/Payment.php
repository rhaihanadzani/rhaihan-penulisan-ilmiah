<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Payment extends Model
{
    use HasFactory;
    protected $fillable = ['uuid', 'user_id', 'card_payments_id', 'bulan', 'is_paid', 'invoice_id'];

           protected static function booted()
    {
        static::creating(function ($model) {
            if (empty($model->uuid)) {
                $model->uuid = (string) Str::uuid();
            }
        });
    }
      public function user()
    {
        return $this->belongsTo(User::class);
    }

      public function cardPayment()
    {
        return $this->belongsTo(CardPayment::class);
    }

      public function invoice()
    {
        return $this->belongsTo(Invoice::class);
    }


}
