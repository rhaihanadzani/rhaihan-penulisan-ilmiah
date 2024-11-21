<?php

namespace Database\Seeders;


use App\Models\Pelajarans;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PelajaranSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bulas = [
            ['nama' => 'Pelajaran 1'],
            ['nama' => 'Pelajaran 2'],
            ['nama' => 'Pelajaran 3'],
            ['nama' => 'Pelajaran 4'],
            ['nama' => 'Pelajaran 5'],
            ['nama' => 'Pelajaran 6'],
            ['nama' => 'Pelajaran 7'],
            ['nama' => 'Pelajaran 8'],
            ['nama' => 'Pelajaran 9'],
            ['nama' => 'Pelajaran 10'],

        ];

        foreach ($bulas as $pelajaran) {
            Pelajarans::create($pelajaran);
        }
    }
}
