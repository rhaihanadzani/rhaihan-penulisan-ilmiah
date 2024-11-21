<?php

namespace Database\Seeders;


use App\Models\Absensis;
use App\Models\Attendances;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AbsensiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          // Definisikan nilai ID untuk santri, bulan, tahun, pelajaran, dan kelas
          $santri_ids = [1, 2, 3, 4, 5];
          $bulan_ids = range(1, 2);
          $tahun_ids = range(1, 2);
          $pelajaran_ids = range(1, 2);
          $kelas_ids = range(1, 2);

          $keterangan_options = ['hadir', 'izin', 'ghoib'];

          for ($i = 0; $i < 10; $i++) {
              // Generate created_at yang berbeda
              $created_at = Carbon::today()->subDays(10 - $i);

              for ($j = 0; $j < 5; $j++) {
                  // Pilih ID secara acak dari array yang tersedia
                  $santri_id = $santri_ids[array_rand($santri_ids)];
                  $bulan_id = $bulan_ids[array_rand($bulan_ids)];
                  $tahun_id = $tahun_ids[array_rand($tahun_ids)];
                  $pelajaran_id = $pelajaran_ids[array_rand($pelajaran_ids)];
                  $kelas_id = $kelas_ids[array_rand($kelas_ids)];
                  $keterangan = $keterangan_options[array_rand($keterangan_options)];

                  // Tentukan minggu berdasarkan hari dari created_at
                  $minggu = ceil((new Carbon($created_at))->day / 7);

                  Attendances::create([
                      'santri_id' => $santri_id,
                      'bulan_id' => $bulan_id,
                      'tahun_id' => $tahun_id,
                      'pelajaran_id' => $pelajaran_id,
                      'kelas_id' => $kelas_id,
                      'minggu' => strval($minggu), // minggu dalam bentuk string
                      'keterangan' => $keterangan,
                      'created_by' => 'admin',
                      'created_at' => $created_at,
                      'updated_at' => $created_at,
                  ]);
              }
          }
    }
}
