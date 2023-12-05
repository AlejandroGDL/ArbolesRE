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
        Schema::create('arbols', function (Blueprint $table) {
            $table->id('idarbol')->unique();
            $table->string('idone')->references('idone')->on('sensorones');
            $table->string('idtwo')->references('idtwo')->on('sensortwos')->foreignId('idtwo');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('arbols');
    }
};
