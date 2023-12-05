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
        Schema::create('sensortwos', function (Blueprint $table) {
            $table->id('idtwo')->unique();
            $table->foreignId('idarbol')->references('idarbol')->on('arbols');
            $table->string('temperaturaTierra');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sensortwos');
    }
};
