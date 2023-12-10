<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArbolController;
use App\Http\Controllers\ArbolTeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RelacionController;
use App\Http\Controllers\SensoroneController;
use App\Http\Controllers\SensortwoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout',[AuthController::class,'logout']);
});


Route::controller(ArbolTeController::class)->group(function(){
    Route::get('/ArbolesT', 'index');
    Route::post('/ArbolT', 'store');
    Route::get('/ArbolesT/{id}', 'show');
    Route::put('/ArbolesT/{id}', 'update');
    Route::delete('/ArbolesT/{id}', 'destroy');
});

Route::post('/Login',[AuthController::class,'Login']);
Route::get('/Relacion',[RelacionController::class,'index']);

//Sensores
Route::get('/Sensorone',[SensoroneController::class,'index']);
Route::get('/Sensortwo',[SensortwoController::class,'index']);