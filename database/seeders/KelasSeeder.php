<?php

namespace Database\Seeders;

use App\Models\Kelas;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kelas = [
            ['nama' => 'satu','id' => 1,],
            ['nama' => 'dua','id' => 2],
            ['nama' => 'tiga','id' => 3],
            ['nama' => 'empat','id' => 4],
            ['nama' => 'lima','id' => 5],
            ['nama' => 'enam','id' => 6],


        ];

        foreach ($kelas as $pelajaran) {
            Kelas::create($pelajaran);
        }

    }
}
