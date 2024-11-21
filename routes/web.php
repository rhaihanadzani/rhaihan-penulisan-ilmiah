<?php

use App\Http\Controllers\AbsensiController;
use App\Http\Controllers\AdminHolidayController;
use App\Http\Controllers\AdminPaymentController;
use App\Http\Controllers\AdminReportController;
use App\Http\Controllers\CardPaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UsersAbsensiController;
use App\Http\Controllers\UsersInvoiceController;
use App\Http\Controllers\UsersPaymentController;
use App\Http\Controllers\UsersReportsController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Home/Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



// ======================AUTH=========================================


// Admin
Route::middleware(['auth', 'userAccess:Admin'])->group(function () {
    Route::get('/dashboard-admin', function () {
        $user = User::with('profile')->find(auth()->id());
        return Inertia::render('Admin/Index', [
            'user' => $user
        ]);
    });
    Route::get('/admin/user/santri', [UserController::class, 'indexSantri'])->name('user.santri.index');
    Route::post('/admin/user/santri', [UserController::class, 'storeSantri'])->name('user.santri.store');
    Route::get('/admin/user/ustadz', [UserController::class, 'indexUstadz'])->name('user.ustadz.index');
    Route::post('/admin/user/ustadz', [UserController::class, 'storeUstadz'])->name('user.ustadz.store');


    // Holiday

    Route::get('/admin-report', [AdminHolidayController::class, 'index'])->name('admin.holiday.index');
    Route::post('/admin-create-holidays', [AdminHolidayController::class, 'store'])->name('admin.holiday.store');
    Route::patch('/admin-edit-holidays/{holiday}', [AdminHolidayController::class, 'update'])->name('admin.holiday.update');
    Route::delete('/admin-delete-holidays/{holiday}', [AdminHolidayController::class, 'destroy'])->name('admin.holiday.delete');

    // Report

    Route::get('/admin-report-view/{holiday}', [AdminReportController::class, 'index'])->name('admin.report.index');
    Route::get('/admin-report-view/{holiday}/{user}', [AdminReportController::class, 'view'])->name('admin.report.index');
    Route::get('/admin-report-user/{report}', [AdminReportController::class, 'detail'])->name('admin.report.detail');
    Route::patch('/admin-report-verify/{report}', [AdminReportController::class, 'verify'])->name('admin.report.verify');

    // Card Payment
    Route::get('/card-payment', [CardPaymentController::class, 'index'])->name('card.payment.index');
    ROute::post('/card-payment-store', [CardPaymentController::class, 'store'])->name('card.payment.store');

    // WA Gateway
    Route::post('/wa-gateway', [CardPaymentController::class, 'waGateway'])->name('wa.gateway');

    //  Payment
    Route::get('/admin-santri-payment', [AdminPaymentController::class, 'index'])->name('admin.payment.index');
    Route::get('/admin-santri-payment/{user}', [AdminPaymentController::class, 'view'])->name('admin.payment.view');
    Route::get('/admin-payment-view/{user}/{card}', [AdminPaymentController::class, 'detail'])->name('admin.payment.detail');
});

// Ustadz
Route::middleware(['auth', 'userAccess:Ustadz|Admin'])->group(function () {
    Route::get('/ustadz', function () {
        $user = User::with('profile')->find(auth()->id());
        return Inertia::render('Ustadz/Index', [
            'user' => $user
        ]);
    });

    // ====ABSENSI Santri========
    Route::get('/absensi', [AbsensiController::class, 'index'])->name('absensi.index');
    Route::get('/absen-tasnim/{pelajaran}/{kelas}', [AbsensiController::class, 'create'])->name('absensi.create');
    Route::post('/store-absen/{pelajaran}/{kelas}', [AbsensiController::class, 'store'])->name('absensi.store');

    Route::get('/detail-absensi/{pelajaran}/{kelas}/{bulan}/{tahun}', [AbsensiController::class, 'detail'])->name('absen-tasnim.detail');

    Route::get('/edit-absensi/{absen}', [AbsensiController::class, 'edit'])->name('absensi.edit');
    Route::patch('/update-absensi/{absen}', [AbsensiController::class, 'update'])->name('update-absen');
});



// Users
Route::middleware(['auth', 'userAccess:Users|Admin|Ustadz'])->group(function () {

    Route::get('/dashboard-user', function () {
        $user = User::with('profile')->find(auth()->id());
        return Inertia::render('User/Index', [
            'user' => $user
        ]);
    })->name('dashboard');

    // absensi
    Route::get('/absensi-santri', [UsersAbsensiController::class, 'index'])->name('index.absensi.user');
    Route::get('/santri-detail-absensi/{pelajaran}/{bulan}/{tahun}', [UsersAbsensiController::class, 'detail'])->name('view.absensi.user');

    // report
    Route::get('/santri-report', [UsersReportsController::class, 'index'])->name('index.report.user');
    Route::get('/santri-report/{holiday}', [UsersReportsController::class, 'create'])->name('create.report.user');
    Route::post('/santri-create-report', [UsersReportsController::class, 'store'])->name('store.report.user');
    Route::get('/santri-view-report', [UsersReportsController::class, 'view'])->name('view.report.user');
    Route::get('/santri-view-report/{holiday}', [UsersReportsController::class, 'detail'])->name('detail.report.user');
    Route::get('/santri-detail-report/{report}', [UsersReportsController::class, 'detail_id'])->name('detailId.report.user');
    Route::get('/santri-edit-report/{report}', [UsersReportsController::class, 'edit'])->name('edit.report.user');
    Route::patch('/santri-change-report/{report}', [UsersReportsController::class, 'update'])->name('update.report.user');
    Route::delete('/santri-delete-report/{report}', [UsersReportsController::class, 'destroy'])->name('delete.report.user');


    // Settings

    Route::get('/settings', [SettingsController::class, 'index'])->name('settings.index');
    Route::get('/settings-view-data', [SettingsController::class, 'view_data'])->name('settings.view_data');
    Route::patch('/settings-update-data/{user}', [SettingsController::class, 'update_data'])->name('settings.update_data');


    // Payment
    Route::get('/santri-payment', [UsersPaymentController::class, 'index'])->name('santri.payment.index');
    Route::get('/santri-payment-view/{payment}', [UsersPaymentController::class, 'view'])->name('view.payment.user');
    Route::post('/card-payment/{uuid}/process', [UsersPaymentController::class, 'processPayment'])->name('payments.process');

    // invoice

    Route::get('/santri-invoice/{invoiceUuid}', [UsersInvoiceController::class, 'index'])->name('index.invoice.user');
});

// ===================================END AUTH==============================


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
