<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profiles extends Model
{
    use HasFactory;


    protected $fillable = [
        'bio',
        'image',
        'phone'
    ];


    public function user()
    {
        return $this->hasOne(User::class, 'profile_id');
    }

}
