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
        Schema::create('arbol_tes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idone');
            $table->foreignId('idtwo');
            $table->string('temperaturaAmb');
            $table->string('humedadAmb');
            $table->string('temperaturaTierra');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('arbol_tes');
    }
};
