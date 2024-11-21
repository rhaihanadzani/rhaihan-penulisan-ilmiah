<?php

namespace App\Http\Controllers;

use App\Models\Attendances;
use App\Models\Bulans;
use App\Models\Pelajarans;
use App\Models\Tahuns;
use Inertia\Inertia;

class UsersAbsensiController extends Controller
{
       public function index()
    {
        $user = auth()->user()->id;

        $absen_user = Attendances::with('pelajaran')
            ->where('santri_id', $user)
            ->orderByDesc('id')
            ->paginate(9);

        // Fetch all Bulans, Tahuns, and Pelajarans
        $bulans = Bulans::all();
        $tahuns = Tahuns::all();
        $pelajarans = Pelajarans::all();


        return Inertia::render('User/Absensi/Index', [
            'absen_user' => $absen_user,
            'bulans' => $bulans,
            'tahuns' => $tahuns,
            'pelajarans' => $pelajarans,

        ]);
    }

    public function detail($pelajaran,$bulan,$tahun)
    {

        $pelajaran = Pelajarans::where('uuid', $pelajaran)->firstOrFail();
        $bulan = Bulans::where('uuid', $bulan)->firstOrFail();
        $tahun = Tahuns::where('uuid', $tahun)->firstOrFail();

           // Fetch all Bulans, Tahuns, and Pelajarans
        $bulans = Bulans::all();
        $tahuns = Tahuns::all();
        $pelajarans = Pelajarans::all();


        $absen = Attendances::with('pelajaran')->where('santri_id', auth()->user()->id)
        ->where('pelajaran_id', $pelajaran->id)
        ->where('bulan_id', $bulan->id)
        ->where('tahun_id', $tahun->id)
        ->get();
        return Inertia::render('User/Absensi/Detail',[
            'absen' => $absen,
            'bulans' => $bulans,
            'tahuns' => $tahuns,
            'pelajarans' => $pelajarans
        ]);
    }
}
