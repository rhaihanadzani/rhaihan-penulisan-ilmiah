<?php

namespace Database\Seeders;

use App\Models\Kelas;
use App\Models\Profile;
use App\Models\Profiles;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $santris = [
            ['name' => 'Santri 1', 'email' => 'santri1@gmail.com', 'password' => Hash::make('password'), 'kelas_id' => 1, 'type' => 0],
            ['name' => 'Santri 2', 'email' => 'santri2@gmail.com', 'password' => Hash::make('password'), 'kelas_id' => 1, 'type' => 0],
            ['name' => 'Santri 3', 'email' => 'santri3@gmail.com', 'password' => Hash::make('password'), 'kelas_id' => 2, 'type' => 0],
            ['name' => 'Santri 4', 'email' => 'santri4@gmail.com', 'password' => Hash::make('password'), 'kelas_id' => 2, 'type' => 0],
            ['name' => 'Santri 5', 'email' => 'santri5@gmail.com', 'password' => Hash::make('password'), 'kelas_id' => 3, 'type' => 0],
            ['name' => 'Ustadz 1', 'email' => 'ustadz1@gmail.com', 'password' => Hash::make('password'),  'type' => 2],
            ['name' => 'Ustadz 2', 'email' => 'ustadz2@gmail.com', 'password' => Hash::make('password'),  'type' => 2],
            ['name' => 'Ustadz 3', 'email' => 'ustadz3@gmail.com', 'password' => Hash::make('password'),  'type' => 2],
            ['name' => 'Ustadz 4', 'email' => 'ustadz4@gmail.com', 'password' => Hash::make('password'),  'type' => 2],
            ['name' => 'Ustadz 5', 'email' => 'ustadz5@gmail.com', 'password' => Hash::make('password'),  'type' => 2],
            ['name' => 'Admin 1', 'email' => 'admin1@gmail.com', 'password' => Hash::make('password'),  'type' => 1],
            ['name' => 'Admin 2', 'email' => 'admin2@gmail.com', 'password' => Hash::make('password'),  'type' => 1],
            ['name' => 'Admin 3', 'email' => 'admin3@gmail.com', 'password' => Hash::make('password'),  'type' => 1],
            ['name' => 'Admin 4', 'email' => 'admin4@gmail.com', 'password' => Hash::make('password'),  'type' => 1],
            ['name' => 'Admin 5', 'email' => 'admin5@gmail.com', 'password' => Hash::make('password'),  'type' => 1],
        ];

        foreach ($santris as $santriData) {


        $profile = Profiles::create([
            'bio' => "Saya adalah seorang santri di Pondok Pesantren Tahaffuzul Qur'an Tasnim. Di pondok ini, saya mendalami ilmu agama dan menghafal Al-Qur'an dengan tekun. Lingkungan pesantren yang kondusif serta bimbingan dari para ustadz dan ustadzah yang berpengalaman sangat membantu dalam proses belajar saya",
        ]);


            // Buat user dengan profile_id yang baru dibuat
            $santriData['profile_id'] = $profile->id;

            User::create($santriData);
        }
    }
}
