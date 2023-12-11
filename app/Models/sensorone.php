<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensorone extends Model
{
    use HasFactory;
    public $table = 'sensornone';
    
    public function Arbol(){
        return $this->hasMany(Arbol::class,'id');
    }
}
