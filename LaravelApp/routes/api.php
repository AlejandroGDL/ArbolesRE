<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArbolController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(ArbolController::class)->group(function(){
    Route::get('/Arboles', 'index');
    Route::post('/Albol', 'store');
    Route::get('/Arboles/{id}', 'show');
    Route::put('/Arboles/{id}', 'update');
    Route::delete('/Arboles/{id}', 'destroy');
});