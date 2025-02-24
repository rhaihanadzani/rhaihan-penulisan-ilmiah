<?php

namespace App\Http\Controllers;

use App\Models\Profiles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingsController extends Controller
{
    //

    public function index()
    {
        $userId = auth()->id();
        if (!$userId) {
            return redirect()->route('login');
        }

        $user = User::with('profile')->select('id', 'name', 'email', 'profile_id')->find($userId);
        // dd($user);
        return Inertia::render('Settings/Index', [
            'user' => $user
        ]);
    }
    public function view_data()
    {
        // Ambil ID pengguna yang sedang login
        $userId = auth()->id();

        // Coba ambil data pengguna dari cache
        $user = Cache::remember("user_{$userId}", 60, function () use ($userId) {
            // Jika tidak ada di cache, ambil dari database dan simpan ke cache
            return User::with('profile')->find($userId);
        });

        return response()->json($user);
    }



    public function update_data(Request $request, $id)
    {
        // dd($request->all());

        $profile = Profiles::where('id', $id)->firstOrFail();

        // Validasi input
        $validatedData = [
            'phone' => $request->phone,
            'bio' => $request->bio,
            'image' => $request->image

        ];


        $path = 'profile/photo';

        // Cek apakah ada file foto baru yang diunggah
        if ($request->hasFile('image')) {
            // Hapus foto lama jika ada
            if ($profile && $profile->image) {
                $oldPhotoPath = $path . '/' . $profile->image;

                if (Storage::disk('public')->exists($oldPhotoPath)) {
                    Storage::disk('public')->delete($oldPhotoPath);
                }
            }

            // Simpan foto baru dengan nama unik
            $photoName = time() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->storeAs($path, $photoName, 'public');

            // Masukkan nama foto ke dalam data yang divalidasi
            $validatedData['image'] = $photoName;
        }

        // Update data student
        $profile->update($validatedData);

        // Redirect ke halaman settings dengan pesan sukses
        return redirect()->to('/settings')->with('success', 'Profile updated successfully');
    }
}
