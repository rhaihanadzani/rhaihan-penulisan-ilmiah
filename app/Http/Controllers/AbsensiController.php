<?php

namespace App\Http\Controllers;

use App\Models\Bulans;
use App\Models\Attendances;
use App\Models\Kelas;
use App\Models\Pelajarans;
use App\Models\Tahuns;
use App\Models\User;


use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

use function PHPSTORM_META\type;

class AbsensiController extends Controller
{
public function getWeekOfMonth($date)
{

    $today = Carbon::parse($date);

    $firstDayOfMonth = $today->copy()->startOfMonth();

    $firstDayOfWeek = $firstDayOfMonth->dayOfWeek;

    $dayOfMonth = $today->day;

    $weekOfMonth = ceil(($dayOfMonth + $firstDayOfWeek - 1) / 7);

    return strval($weekOfMonth);
}

 public function index()
{
         $kelas = Kelas::all();
        $santris = User::all();
        $pelajarans = Pelajarans::all();
        $bulan = Bulans::all();
        $tahun = Tahuns::all();

        return Inertia::render('Absensi/Index', [
            'santris' => $santris,
            'pelajarans' => $pelajarans,
            'kelas' => $kelas,
            'bulan' => $bulan,
            'tahun' => $tahun

        ]);
}
 public function create($pelajaran, $kelas)
{


        $pelajaran = Pelajarans::where('uuid', $pelajaran)->firstOrFail();
        $kelas = Kelas::where('uuid', $kelas)->firstOrFail();

        $santri = User::where('kelas_id', $kelas->id)->get();
        $bulan = Bulans::all();
        $tahun = Tahuns::all();

        return Inertia::render('Absensi/Create',[
            'pelajaran' => $pelajaran,
            'kelas' => $kelas,
            'santris' => $santri,
            'bulan' => $bulan,
            'tahun' => $tahun
        ]);
}
  public function store(Request $request, $pelajaran, $kelas)
{

        $validator = Validator::make($request->all(), [
            'bulan' => 'required|string',
            'tahun' => 'required|string',
            'absensi' => 'required|array',
            'absensi.*.santri_id' => 'required|exists:users,id',
            'absensi.*.keterangan' => 'required|string',
            'absensi.*.from_surah' => 'nullable|string',
            'absensi.*.to_surah' => 'nullable|string',
            'absensi.*.from_ayat' => 'nullable|string',
            'absensi.*.to_ayat' => 'nullable|string',
            'absensi.*.juz' => 'nullable|integer',
        ]);

    if($validator->fails()){
    return redirect()->back()->withErrors($validator->errors())->withInput();
    }
        $bulan = (intval($request->bulan));
        $tahun = (intval($request->tahun));
        $today = Carbon::today();
        $minggu = $this->getWeekOfMonth($today);

        foreach ($validator->validated()['absensi'] as $data) {
            $juz = intval($data['juz']);
            Attendances::create(
                [
                    'santri_id' => $data['santri_id'],
                    'bulan_id' => $bulan,
                    'tahun_id' => $tahun,
                    'pelajaran_id' => $pelajaran,
                    'kelas_id' => $kelas,
                    'minggu' => $minggu,
                    'keterangan'=> $data['keterangan'],
                    'from_surah' => $data['from_surah'] ?? null,
                    'to_surah' => $data['to_surah'] ?? null,
                    'from_ayat' => $data['from_ayat'] ?? null,
                    'to_ayat' => $data['to_ayat'] ?? null,
                    'juz' => $juz ?? null,
                    'created_by' => auth()->user()->name,
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now(),
                ],
            );

        }

        return redirect()->back()->with('message', 'Absensi berhasil disimpan.');
}

 public function detail($pelajaranUuid, $kelasUuid, $bulanUuid, $tahunUuid)
{
    $pelajaran = Pelajarans::where('uuid', $pelajaranUuid)->firstOrFail();
    $kelas = Kelas::where('uuid', $kelasUuid)->firstOrFail();
    $bulan = Bulans::where('uuid', $bulanUuid)->firstOrFail();
    $tahun = Tahuns::where('uuid', $tahunUuid)->firstOrFail();

    // Mengambil daftar data lainnya dari cache
    $kelases = Cache::remember('kelases', 60*60, function () {
        return Kelas::select('uuid', 'nama')->get();
    });
    $pelajarans = Cache::remember('pelajarans', 60*60, function () {
        return Pelajarans::select('uuid', 'nama')->get();
    });
    $bulans = Cache::remember('bulans', 60*60, function () {
        return Bulans::select('uuid', 'nama')->get();
    });
    $tahuns = Cache::remember('tahuns', 60*60, function () {
        return Tahuns::select('uuid', 'nama')->get();
    });

    $absen = Attendances::with('user')
        ->where('pelajaran_id', $pelajaran->id)
        ->where('kelas_id', $kelas->id)
        ->where('bulan_id', $bulan->id)
        ->where('tahun_id', $tahun->id)
        ->get();

    return Inertia::render('Absensi/Detail', [
        'absen' => $absen,
        'pelajaran' => $pelajaran,
        'kelas' => $kelas,
        'bulan' => $bulan,
        'tahun' => $tahun,
        'kelases' => $kelases,
        'pelajarans' => $pelajarans,
        'bulans' => $bulans,
        'tahuns' => $tahuns
    ]);
}



    public function edit($absenId)
    {
        $absen = Attendances::with('user')->with('pelajaran')->with('bulan')->with('tahun')->with('kelas')->where('uuid', $absenId)->firstOrFail();


        $bulans = Bulans::all();
        $tahuns = Tahuns::all();

        return Inertia::render('Absensi/Edit', [
            'absen' => $absen,
            'bulan' => $bulans,
            'tahun' => $tahuns

        ]);
    }

     public function update(Request $request, $absenId)
    {
        // dd($request->all());

        $attendance = Attendances::findOrFail($absenId);

        $juz = intval($request->juz);


       $attendance->update([
        'keterangan' => $request->keterangan,
        'from_surah' => $request->from_surah,
        'to_surah' => $request->to_surah,
        'from_ayat' => $request->from_ayat,
        'to_ayat' => $request->to_ayat,
        'juz' => $juz,
    ]);



        return redirect()->back()->with('success', 'Absensi updated successfully.');
    }

}
