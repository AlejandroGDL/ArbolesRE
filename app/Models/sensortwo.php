<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensortwo extends Model
{
    use HasFactory;
    public $table = 'sensorntwo';
    public function Arbol(){
        return $this->hasMany(Arbol::class,'id');
    }
}
