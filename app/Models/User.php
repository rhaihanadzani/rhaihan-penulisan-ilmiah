<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;


class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'kelas_id',
        'profile_id',
        'type',

    ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

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
    public function report()
    {
        return $this->hasMany(Reports::class);
    }
    public function kelas()
    {
        return $this->belongsTo(Kelas::class,'kelas_id', 'id');
    }
    public function profile()
        {
            return $this->belongsTo(Profiles::class, 'profile_id');
        }

     public function payment()
    {
        return $this->hasMany(Payment::class);
    }

      public function cardPayments()
    {
        return $this->hasManyThrough(CardPayment::class, Payment::class);
    }

    public function invoices()
    {
        return $this->hasMany(Invoice::class);
    }

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
     protected function type():Attribute
    {
        return new Attribute(
            get: fn ($value) => ["Users", "Admin", "Ustadz"][$value],
        );
    }
}
