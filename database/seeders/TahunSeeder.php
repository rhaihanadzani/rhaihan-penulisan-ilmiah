<?php

namespace Database\Seeders;

use App\Models\Tahuns;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TahunSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tahuns = [
            ['nama' => '2024'],
            ['nama' => '2025'],
            ['nama' => '2026'],
            ['nama' => '2027'],
            ['nama' => '2028'],


        ];

        foreach ($tahuns as $pelajaran) {
            Tahuns::create($pelajaran);
        }
    }
}
