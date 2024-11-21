<?php

namespace App\Http\Controllers;

use App\Models\CardPayment;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CardPaymentController extends Controller
{
    public function index()
    {
        $cardPayments = CardPayment::select('uuid', 'name')->get();
        return Inertia::render('Admin/CardPayment/Index', [
            'cardPayments' => $cardPayments
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|string',
        ]);



        CardPayment::create([
            'name' => $request->name,
            'price' => intval($request->price)
        ]);

        return redirect()->back();
    }
    public function waGateway(Request $request)
    {


        $phone = $request->phone;
        $unpaidMonths = $request->unpaidMonths;
        $cardPayment = $request->cardPayment;
        $user = $request->user;

        $token = 'UutPamZtoq714qDrFvkp';
        $formattedMonths = implode(', ', array_map(fn($month) => "*$month*", explode(', ', $unpaidMonths)));


        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.fonnte.com/send',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array(
                'target' => $phone,
                'message' => "Assalamualaikum warrahmatullahi wabarakatuh \n \nKepada yang terhormat wali dari *$user*\n \nAnda belum membayar pembayaran $cardPayment untuk bulan: \n \n$formattedMonths . \nMohon segera lunasi pembayaran anda \n \nTerimakasih \n \n**Admin Pondok Pesantren Tahaffuzul Qur'an Tasnim**",
                'delay' => '2',
                'countryCode' => '62',
            ),
            CURLOPT_HTTPHEADER => array(
                'Authorization: ' . $token
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        echo $response;

        return redirect()->back();
    }
}
