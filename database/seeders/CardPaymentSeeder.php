<?php

namespace Database\Seeders;

use App\Models\CardPayment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CardPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         $cardPayments = [
            ['name' => 'Syariah Tahun Pertama', 'price' => 400000],
            ['name' => 'Syariah Tahun Kedua', 'price' => 400000],
            ['name' => 'Syariah Tahun Ketiga', 'price' => 400000],

            ];

        foreach ($cardPayments as $cardPayment) {
            CardPayment::create($cardPayment);
        }
    }
}
