<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $user = Usuarios::where('Email','=',$request->Email,' and ','Password','=',$request->Password)->first();
        $Nombre = Usuarios::where('Email','=',$request->Email)->value('User_Name');

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
