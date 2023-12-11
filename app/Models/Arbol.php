<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Arbol extends Model
{
    use HasFactory;
    public $table = 'arbol';

    public function sensors(){
        return $this->belongsTo(Sensorone::class,'id');
    }
}
