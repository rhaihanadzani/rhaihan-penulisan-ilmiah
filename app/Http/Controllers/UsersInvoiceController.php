<?php

namespace App\Http\Controllers;

use App\Models\Invoice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UsersInvoiceController extends Controller
{
    //

    public function index($invoiceUuid)
    {
        $snapToken = session('snapToken');
        $invoiceId = session('invoice_id');

        $invoices = Invoice::where('uuid', $invoiceUuid)->with('payments')->with('cardPayments')->first();
        return Inertia::render('User/Invoice/Index', [
            'invoices' => $invoices,
            'snapToken' => $snapToken,
            'clientKey' => config('midtrans.client_key'),
        ]);
    }
}
