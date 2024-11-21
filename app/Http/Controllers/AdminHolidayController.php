<?php

namespace App\Http\Controllers;

use App\Models\Holidays;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminHolidayController extends Controller
{

       public function index ()
    {
        $holidays = Holidays::all();
        return Inertia::render('Admin/Holidays/Index',[
            'holidays' => $holidays
        ]);
    }


     public function store (Request $request)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string',
            'last_holiday' => 'required|string',
            'is_active'=> 'required|boolean',
        ]);

        $name = $request->name;
        $last_holiday = $request->last_holiday;
        $is_active = $request->is_active;


        Holidays::create([
            'name' => $name,
            'last_holiday' => $last_holiday,
            'is_active' => $is_active
        ]);

        return redirect()->back();
    }

    public function update (Request $request, $id)
    {
        // dd($request->all());
        $request->validate([
            'name' => 'required|string',
            'last_holiday' => 'required|string',
            'is_active'=> 'required|boolean',
        ]);

        $name = $request->name;
        $last_holiday = $request->last_holiday;
        $is_active = $request->is_active;


        Holidays::where('id', $id)->update([
            'name' => $name,
            'last_holiday' => $last_holiday,
            'is_active' => $is_active
        ]);

        return redirect()->back();
    }

     public function destroy ( $id)
    {

        Holidays::where('id', $id)->delete();

        return redirect()->back();
    }
}

