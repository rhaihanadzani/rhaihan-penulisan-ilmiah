<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id'); // Auto-incrementing primary key
            $table->uuid('uuid')->unique();
            $table->string('name');
            $table->string('email')->unique();
            $table->foreignId('kelas_id')->nullable()->constrained('kelas')->onDelete('set null');
            $table->foreignId('profile_id')->constrained('profiles', 'id')->onDelete('cascade');
            $table->integer('type')->default(0);// Users: 0, Admin: 1, Ustadz
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
