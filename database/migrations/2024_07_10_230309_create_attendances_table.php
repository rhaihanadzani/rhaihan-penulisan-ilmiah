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
        Schema::create('attendances', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->foreignId('santri_id')->constrained('users', 'id')->onDelete('cascade');
            $table->foreignId('bulan_id')->constrained('bulans', 'id')->onDelete('cascade');
            $table->foreignId('tahun_id')->constrained('tahuns', 'id')->onDelete('cascade');
            $table->foreignId('pelajaran_id')->constrained('pelajarans', 'id')->onDelete('cascade');
            $table->foreignId('kelas_id')->constrained('kelas', 'id')->onDelete('cascade');
            $table->string('keterangan');
            $table->string('minggu');
            $table->string('created_by');
            $table->string('from_surah')->nullable();
            $table->string('to_surah')->nullable();
            $table->string('from_ayat')->nullable();
            $table->string('to_ayat')->nullable();
            $table->integer('juz')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attendances');
    }
};
