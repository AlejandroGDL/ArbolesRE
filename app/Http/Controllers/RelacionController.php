<?php

namespace App\Http\Controllers;

use App\Models\Arbol;
use Illuminate\Http\Request;

class RelacionController extends Controller
{
    public function index(){
        $Arbol = Arbol::all();
        return $Arbol;

        // $arbol = Arbol::find(1);
        // $sensors = $arbol->sensors;
        // return $sensors;
    }
}
