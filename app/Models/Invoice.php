<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Invoice extends Model
{
    use HasFactory;
     protected $fillable = ['uuid','user_id', 'total_amount','card_payments_id','is_paid'];

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
        return $this->hasMany(Payment::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cardPayments()
    {
        return $this->belongsTo(CardPayment::class);
    }

}
