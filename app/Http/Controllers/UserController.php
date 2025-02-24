<?php

namespace App\Http\Controllers;

use App\Models\Kelas;
use App\Models\Profiles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function indexSantri()
    {
        return Inertia::render('Admin/User/Santri', [
            'kelas' => Kelas::where('id', '!=', 7)->get()
        ]);
    }
    public function storeSantri(Request $request)
    {

        $validador = Validator::make($request->all(), [
            'nama' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'kelas' => ['required', 'string', 'max:255'],
            'noWa' => ['required', 'string', 'max:255'],

        ]);

        if ($validador->fails()) {
            return redirect()->back()->withErrors($validador->errors());
        }
        $kelas = $request->kelas;
        $name = $request->nama;
        $password = $request->password;
        $email = $request->email;
        $noWa = $request->noWa;


        $kelas = intval($kelas);
        $password = Hash::make($password);

        DB::beginTransaction();

        $profile = Profiles::create([
            'bio' => 'Santri Pondok Pesantren Tahaffuzul Qur`an Tasnim',
            'phone' => $noWa
        ]);
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'profile_id' => $profile->id,
            'type' => 0,
            'kelas_id' => $kelas
        ]);

        DB::commit();

        return redirect()->back()->with('message', 'User created successfully');
    }
    public function indexUstadz()
    {
        return Inertia::render('Admin/User/Ustadz');
    }
    public function storeUstadz(Request $request)
    {


        $validador = Validator::make($request->all(), [
            'nama' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'type' => ['required', 'string', 'max:255'],
        ]);
        if ($validador->fails()) {
            return redirect()->back()->withErrors($validador->errors());
        }
        $type = $request->type;
        $name = $request->nama;
        $password = $request->password;
        $email = $request->email;


        $type = intval($type);
        $password = Hash::make($password);


        DB::beginTransaction();

        $profile = Profiles::create([
            'bio' => 'Pengurus Pondok Pesantren Tahaffuzul Qur`an Tasnim',
        ]);
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'profile_id' => $profile->id,
            'type' => $type,

        ]);

        DB::commit();

        return redirect()->back()->with('message', 'User created successfully');
    }
}
