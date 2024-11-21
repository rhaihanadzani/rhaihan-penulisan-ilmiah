<?php

namespace Database\Seeders;

use App\Models\Holidays;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HolidaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $holidays = [
            ['name' => 'Idul Fitri','last_holiday' => '17-08-2024'],
            ['name' => 'Idul Adha','last_holiday' => '17-09-2024'],
            ['name' => 'Maulid Nabi','last_holiday' => '17-10-2024'],

            ];

        foreach ($holidays as $holiday) {
            Holidays::create($holiday);
        }
    }
}
