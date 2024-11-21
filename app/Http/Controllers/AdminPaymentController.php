<?php

namespace App\Http\Controllers;

use App\Models\CardPayment;
use App\Models\Payment;
use App\Models\Profiles;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminPaymentController extends Controller
{
    //

    public function index()
    {

        $users = User::where('type', 0)->with('kelas')->get();
        return Inertia::render('Admin/Payment/Index', [
            'users' => $users
        ]);
    }

    public function view($uuidUser)
    {
        // Cari user berdasarkan UUID
        $user = User::where('uuid', $uuidUser)->with('profile')->first();


        // Ambil pembayaran kartu terkait dengan user tersebut
        $cardPayments = CardPayment::select('id', 'uuid', 'name')
            ->with(['payments' => function ($query) use ($user) {
                $query->where('user_id', $user->id);
            }])->get();

        foreach ($cardPayments as $cardPayment) {
            $bulanList = [
                'Januari' => false,
                'Februari' => false,
                'Maret' => false,
                'April' => false,
                'Mei' => false,
                'Juni' => false,
                'Juli' => false,
                'Agustus' => false,
                'September' => false,
                'Oktober' => false,
                'November' => false,
                'Desember' => false,
            ];

            foreach ($cardPayment->payments as $payment) {
                $bulanList[$payment->bulan] = $payment->is_paid;
            }

            $cardPayment->all_paid = !in_array(false, $bulanList);
        }

        // Kirim data ke view melalui Inertia
        return Inertia::render('Admin/Payment/View', [
            'cardPayments' => $cardPayments,
            'user' => $user,

        ]);
    }

    public function detail($userUuid, $cardPaymentUuid)
    {
        $user = User::where('uuid', $userUuid)->with('profile')->first();
        // dd($user);
        $cardPayment = CardPayment::where('uuid', $cardPaymentUuid)->first();
        $payments = Payment::where('card_payments_id', $cardPayment->id)->where('user_id', $user->id)->get();

        $bulanList = [
            'Januari' => false,
            'Februari' => false,
            'Maret' => false,
            'April' => false,
            'Mei' => false,
            'Juni' => false,
            'Juli' => false,
            'Agustus' => false,
            'September' => false,
            'Oktober' => false,
            'November' => false,
            'Desember' => false,
        ];

        // Update status pembayaran untuk setiap bulan
        foreach ($payments as $payment) {
            $bulanList[$payment->bulan] = $payment->is_paid;
        }

        return Inertia::render('Admin/Payment/Detail', [
            'cardPayment' => $cardPayment,
            'bulanList' => $bulanList,
            'user' => $user
        ]);
    }
}
