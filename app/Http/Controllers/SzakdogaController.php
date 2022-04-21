<?php

namespace App\Http\Controllers;

use App\Models\Szakdoga;
use Illuminate\Http\Request;

class SzakdogaController extends Controller
{
    public function index(){
        $szakdogak = response()->json(Szakdoga::all());
        return $szakdogak;
    }
    
    public function ujadat(Request $request){
        $ujadat = new Szakdoga();
        $ujadat->szakdoga_nev = $request->szakdoganev;
        $ujadat->githublink = $request->githublink;
        $ujadat->oldallink = $request->oldallink;
        $ujadat->tagokneve = $request->tagokneve;
        $ujadat->save();
        
    }
    

    /*public function modosit($id){
        
    }*/
    public function torles($nev){
        $torol =Szakdoga::where('szakdoga_nev', $nev)->firstOrFail();
        $torol->delete();
    }
}