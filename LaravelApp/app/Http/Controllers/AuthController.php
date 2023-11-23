<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\HasApiTokens;
use App\Models\usuarios;
use App\Models\User;
use App\Models\Login;
use PharIo\Manifest\Email;

class AuthController extends Controller
{
    public function Login(LoginRequest $request){
        $user = usuarios::where('Email','=',$request->Email,' AND ','Password','=',$request->Password)->first();
        $Nombre = usuarios::where('Email','=',$request->Email)->value('nombre');

        if ($user || $request->Email == $request->Password){
            return response()->json([
                'message' => 'Bienvenido',
                'user' => $user,
                'token' => $user->createToken($Nombre)->plainTextToken,
            ],200);
        } else{
            return response()->json([
                'message' => 'Credenciales Invalidas'
            ],422);
        }

    }
}
