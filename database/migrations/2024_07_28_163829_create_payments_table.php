<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id'); // Auto-incrementing primary key
            $table->uuid('uuid')->unique();
            $table->foreignId('invoice_id')->constrained('invoices', 'id')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('card_payments_id')->constrained('card_payments', 'id')->onDelete('cascade');
            $table->enum('bulan', ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']);
            $table->boolean('is_paid')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
