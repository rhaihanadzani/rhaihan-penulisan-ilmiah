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
            ['nama' => 'Pelajaran 11'],
            ['nama' => 'Pelajaran 12'],
            ['nama' => 'Pelajaran 13'],
            ['nama' => 'Pelajaran 14'],
            ['nama' => 'Pelajaran 15'],
            ['nama' => 'Pelajaran 16'],
            ['nama' => 'Pelajaran 17'],
            ['nama' => 'Pelajaran 18'],
            ['nama' => 'Pelajaran 19'],
            ['nama' => 'Pelajaran 20'],
            ['nama' => 'Pelajaran 21'],
            ['nama' => 'Pelajaran 22'],
            ['nama' => 'Pelajaran 23'],
            ['nama' => 'Pelajaran 24'],
            ['nama' => 'Pelajaran 25'],
        ];

        foreach ($bulas as $pelajaran) {
            Pelajarans::create($pelajaran);
        }
    }
}
