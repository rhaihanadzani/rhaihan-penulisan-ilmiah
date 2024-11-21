<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Attendances extends Model
{
    use HasFactory;

     protected $fillable = [
        'santri_id',
        'bulan_id',
        'tahun_id',
        'kelas_id',
        'minggu',
        'pelajaran_id',
        'keterangan',
        'from_surah',
        'to_surah',
        'from_ayat',
        'to_ayat',
        'juz',
        'created_by',
        'uuid'
    ];

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
        return $this->belongsTo(User::class,'santri_id', 'id');
    }

    public function tahun()
    {
        return $this->belongsTo(Tahuns::class,'tahun_id', 'id');
    }

    public function pelajaran()
    {
        return $this->belongsTo(Pelajarans::class,'pelajaran_id', 'id');
    }

    public function bulan()
    {
        return $this->belongsTo(Bulans::class,'bulan_id', 'id');
    }

    public function kelas()
    {
        return $this->belongsTo(Kelas::class,'kelas_id', 'id');
    }
}
