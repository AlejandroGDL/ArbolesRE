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
        Schema::create('sensorones', function (Blueprint $table) {
            $table->id('idone')->unique();
            $table->string('idarbol')->references('idarbol')->on('arbols');
            $table->string('temperaturaAmb');
            $table->string('humedadAmb');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sensorones');
    }
};
