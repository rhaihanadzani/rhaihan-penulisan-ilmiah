<?php

namespace App\Http\Controllers;

use App\Models\Holidays;
use App\Models\Reports;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminReportController extends Controller
{
    //

    public function index ($holiday_uuid)
    {
        $users = User::where('type', 0)->with('kelas')->get();
        $holiday = Holidays::where('uuid', $holiday_uuid)->first();
        return Inertia::render('Admin/Reports/Index',[
            'holiday' => $holiday,
            'users' => $users
        ]);
    }
   public function view ($holiday_uuid, $user)
   {
        $holiday = Holidays::where('uuid', $holiday_uuid)->first();
        $user = User::where('uuid', $user)->first();
        $reports = Reports::where('holiday_id', $holiday->id)->where('user_id', $user->id)->get();
        return Inertia::render('Admin/Reports/View',[
            'reports' => $reports,
        ]);
   }
   public function detail ($report_uuid)
   {

       $report = Reports::where('uuid', $report_uuid)->with('holiday')->with('user')->first();
       return Inertia::render('Admin/Reports/Detail',[
           'report' => $report
       ]);
   }
    public function verify (Request $request, $report_uuid)
    {

     $status = $request->status;

     Reports::where('id', $report_uuid)->update([
        'status' => $status
    ]);




        return redirect()->back();
    }
}
