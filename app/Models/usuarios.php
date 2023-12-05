<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class usuarios extends Model
{
    use HasFactory,HasApiTokens;
    protected $fillable = ['nombre','Email','Password'];
}
