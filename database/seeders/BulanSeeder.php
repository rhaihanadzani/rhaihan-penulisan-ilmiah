<?php

namespace Database\Seeders;


use App\Models\Bulans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BulanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $pelajarans = [
            ['nama' => 'Januari'],
            ['nama' => 'Februari'],
            ['nama' => 'Maret'],
            ['nama' => 'April'],
            ['nama' => 'Mei'],
            ['nama' => 'Juni'],
            ['nama' => 'Juli'],
            ['nama' => 'Agustus'],
            ['nama' => 'September'],
            ['nama' => 'Oktober'],
            ['nama' => 'November'],
            ['nama' => 'Desember'],

        ];

        foreach ($pelajarans as $pelajaran) {
            Bulans::create($pelajaran);
        }
    }
}
