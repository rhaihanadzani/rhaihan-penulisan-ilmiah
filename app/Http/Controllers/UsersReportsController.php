<?php

namespace App\Http\Controllers;

use App\Models\Holidays;
use App\Models\Reports;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UsersReportsController extends Controller
{
    //
    public function index()
    {
        $holidays = Holidays::where('is_active', true)->get();
        return Inertia::render('User/Reports/Index', [
            'holidays' => $holidays
        ]);
    }
    public function create($holiday)
    {
        $holidays = Holidays::where('uuid', $holiday)->first();
        return Inertia::render('User/Reports/Create', [
            'holidays' => $holidays
        ]);
    }
    // public function store(Request $request)
    // {


    //     $request->validate([
    //         'image' => 'required|image|max:2048',
    //         'description' => 'required|min:50|max:255',
    //         'is_checked' => 'required',
    //         'uuid_holiday' => 'required',
    //         'title' => 'required',
    //     ]);

    //     $title = $request->title;
    //     $description = $request->description;
    //     $is_checked = filter_var($request->is_checked, FILTER_VALIDATE_BOOLEAN);


    //     $uuid_holiday = $request->uuid_holiday;
    //     // dd($uuid_holiday);
    //     $holiday_id = Holidays::where('uuid', $uuid_holiday)->first();

    //     $image = $request->file('image');
    //     $imageData = base64_encode(file_get_contents($image->getRealPath()));
    //     $response = Http::asForm()->post('https://api.imgbb.com/1/upload', [
    //         'key' => env('IMGBB_API_KEY'),
    //         'image' => $imageData,
    //     ]);

    //     if ($response->successful()) {
    //         $data = $response->json();
    //         $image_url = $data['data']['url'];

    //         Reports::create([
    //             'title' => $title,
    //             'description' => $description,
    //             'image' => $image_url,
    //             'murajaah' => $is_checked,
    //             'holiday_id' => $holiday_id->id,
    //             'user_id' => auth()->user()->id,

    //         ]);

    //         return redirect()->back()->with('success', 'Laporan Berhasil Dibuat');
    //     } else {
    //         return redirect()->back()->with('error', 'Laporan Gagal Dibuat');
    //     }
    // }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'image' => 'required|image|max:2048',
            'description' => 'required|min:50|max:255',
            'is_checked' => 'required',
            'uuid_holiday' => 'required',
            'title' => 'required',
        ]);

        // Ambil input
        $title = $request->title;
        $description = $request->description;
        $is_checked = filter_var($request->is_checked, FILTER_VALIDATE_BOOLEAN);
        $uuid_holiday = $request->uuid_holiday;

        // Ambil data holiday berdasarkan UUID
        $holiday = Holidays::where('uuid', $uuid_holiday)->first();

        if (!$holiday) {
            return redirect()->back()->with('error', 'Data liburan tidak ditemukan.');
        }

        // Proses upload gambar ke lokal storage
        $imagePath = null;
        if ($request->hasFile('image')) {
            $path = 'reports/images';
            $imageName = time() . '.' . $request->file('image')->getClientOriginalExtension();

            // Simpan gambar ke storage lokal (public disk)
            $request->file('image')->storeAs($path, $imageName, 'public');
            $imagePath = $imageName;
        }

        // Simpan laporan ke database
        Reports::create([
            'title' => $title,
            'description' => $description,
            'image' => $imagePath,
            'murajaah' => $is_checked,
            'holiday_id' => $holiday->id,
            'user_id' => auth()->user()->id,
        ]);

        return redirect()->back()->with('success', 'Laporan Berhasil Dibuat');
    }

    public function view()
    {
        $holidays = Holidays::where('is_active', true)->get();
        return Inertia::render('User/Reports/View', [
            'holidays' => $holidays
        ]);
    }
    public function detail($holiday)
    {

        $holidays = Holidays::where('uuid', $holiday)->first();
        $reports = Reports::where('holiday_id', $holidays->id)->where('user_id', auth()->user()->id)->get();



        return Inertia::render('User/Reports/Detail', [
            'reports' => $reports
        ]);
    }

    public function detail_id($report)
    {
        #repor

        $report = Reports::where('uuid', $report)->with('holiday')->with('user')->first();

        return Inertia::render('User/Reports/DetailId', [
            'report' => $report
        ]);
    }
    public function edit($report)
    {

        $report = Reports::where('uuid', $report)->where('user_id', auth()->user()->id)->first();

        return Inertia::render('User/Reports/Edit', [
            'report' => $report
        ]);
    }
    // public function update(Request $request, $report)
    // {

    //     $report = Reports::where('uuid', $report)->firstOrFail();


    //     if ($request->image == null) {
    //         $report->update([
    //             'title' => $request->title,
    //             'description' => $request->description,
    //             'murajaah' => $request->is_checked,
    //         ]);
    //     } else {
    //         $report->update([
    //             'title' => $request->title,
    //             'description' => $request->description,
    //             'image' => $request->image,
    //             'murajaah' => $request->is_checked,
    //         ]);
    //     }

    //     return redirect()->route('detailId.report.user', $report->uuid)->with('success', 'Report updated successfully');
    // }
    public function update(Request $request, $report)
    {
        $report = Reports::where('uuid', $report)->firstOrFail();



        $data = [
            'title' => $request->title,
            'description' => $request->description,
            'murajaah' => $request->is_checked,
            'image' => $request->image
        ];



        // Cek apakah ada file gambar baru
        if ($request->hasFile('image')) {
            $path = 'reports/images';

            // Hapus gambar lama jika ada
            if ($report->image && Storage::disk('public')->exists($path . '/' . $report->image)) {
                Storage::disk('public')->delete($path . '/' . $report->image);
            }

            // Simpan gambar baru
            $imageName = time() . '.' . $request->file('image')->getClientOriginalExtension();
            $request->file('image')->storeAs($path, $imageName, 'public');
            $data['image'] = $imageName;
        }

        // Update data laporan
        $report->update($data);

        return redirect()->route('detailId.report.user', $report->uuid)->with('success', 'Laporan berhasil diperbarui.');
    }


    public function destroy($report)
    {
        $report = Reports::where('uuid', $report)->with('holiday')->firstOrFail();
        $uuid_holiday = $report->holiday->uuid;
        // dd($uuid_holiday);
        $report->delete();
        return redirect()->route('detail.report.user', $uuid_holiday)->with('success', 'Report deleted successfully');
    }
}
