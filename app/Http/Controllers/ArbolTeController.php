<?php

namespace App\Http\Controllers;

use App\Models\ArbolTe;
use Illuminate\Http\Request;

class ArbolTeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Arbol = ArbolTe::all();
        return $Arbol;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ArbolTe $arbolTe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ArbolTe $arbolTe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArbolTe $arbolTe)
    {
        //
    }
}
