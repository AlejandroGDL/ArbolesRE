<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sensorone extends Model
{
    use HasFactory;
    protected $fillable = ['idarbol','temperaturaAmb','humedadAmb'];
}
