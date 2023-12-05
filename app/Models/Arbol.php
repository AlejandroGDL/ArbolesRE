<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sensorone;
use App\Models\Sensortwo;

class Arbol extends Model
{
    use HasFactory;

    public function sensorone(){
        return $this->hasOne(Sensorone::class,'idone','idone');
    }

    public function sensortwo(){
        return $this->hasOne(Sensortwo::class,'idtwo','idtwo');
    }
}
