<?php

namespace App\Http\Controllers;

use App\Models\CardPayment;
use App\Models\Invoice;
use App\Models\Payment;
use App\Models\Profiles;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UsersPaymentController extends Controller
{
    //
    public function index()
    {
        $cardPayments = CardPayment::select('id', 'uuid', 'name')
            ->with(['payments' => function ($query) {
                $query->where('user_id', Auth::id());
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

        return Inertia::render('User/Payment/Index', [
            'cardPayments' => $cardPayments,
        ]);
    }


    public function view($cardPaymentUuid)
    {
        $cardPayment = CardPayment::where('uuid', $cardPaymentUuid)->first();
        $payments = Payment::where('card_payments_id', $cardPayment->id)->where('user_id', Auth::user()->id)->get();

        // Inisialisasi array bulan dengan status pembayaran
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

        return Inertia::render('User/Payment/CardPaymentDetail', [
            'cardPayment' => $cardPayment,
            'bulanList' => $bulanList,
        ]);
    }

    public function processPayment(Request $request, $cardPaymentUuid)
    {
        $cardPayment = CardPayment::where('uuid', $cardPaymentUuid)->firstOrFail();

        $user = User::with('profile')->find(Auth::id());



        // Validasi input
        $request->validate([
            'bulan' => 'required|array',
            'bulan.*' => 'in:Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember',
        ]);

        $monthlyPrice = $cardPayment->price;
        $totalPrice = count($request->bulan) * $monthlyPrice; // Calculate total price

        DB::beginTransaction();
        try {
            // Create an invoice for the payment
            $invoice = Invoice::create([
                'user_id' => Auth::id(),
                'total_amount' => $totalPrice,
                'card_payments_id' => $cardPayment->id,
                'is_paid' => false,
            ]);


            foreach ($request->bulan as $bulan) {

                Payment::create([
                    'user_id' => Auth::id(),
                    'card_payments_id' => $cardPayment->id,
                    'bulan' => $bulan,
                    'is_paid' => true,
                    'invoice_id' => $invoice->id,
                ]);
            }
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        DB::commit();



        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = config('midtrans.server_key');
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $params = array(
            'transaction_details' => array(
                'order_id' => "ORDER-" . time(),
                'gross_amount' => $invoice->total_amount,
            ),
            'customer_details' => array(
                'name' => $user->name,
                'phone' => "081322311801",

            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);
        // dd($snapToken);
        session([
            'snapToken' => $snapToken,
            'invoice_id' => $invoice->id,
        ]);

        // return redirect('/payment/' . $order->id);


        return redirect()->route('index.invoice.user', $invoice->uuid);
    }

    public function callback(Request $request)
    {
        $server_key = config('midtrans.server_key');
        $hashed = hash("sha512", $request->order_id . $request->status_code . $request->gross_amount . $server_key);
        if ($hashed == $request->signature_key) {
            if ($request->transaction_status == 'capture' || $request->transaction_status == 'settlement') {
                $invoice = Invoice::find($request->order_id);
                $invoice->update(['is_paid' => true]);
            }
        }
    }
}
