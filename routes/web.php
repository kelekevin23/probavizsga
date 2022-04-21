<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SzakdogaController;
use App\Http\Controllers\UserController;
use App\Models\Szakdoga;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');
});

Route::get('/szakdogaVisszaad', [SzakdogaController::class, 'index']);
Route::post('/szakdogaUj', [SzakdogaController::class, 'ujadat']);
Route::put('/szakdogaModosit/{nev}', [SzakdogaController::class, 'modosit']);
Route::delete('/szakdogakTorol/{nev}', [SzakdogaController::class, 'torles']);


Route::get('/index', function () {
    return view('index');
});


require __DIR__ . '/auth.php';

require __DIR__ . '/auth.php';