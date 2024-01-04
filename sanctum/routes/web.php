<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


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
    return ['Laravel' => app()->version()];
});
Route::post('/logout', function () {
    Auth::guard('web')->logout();

    return response()->json(['message' => 'Successfully logged out']);
});

Route::get('/get-all-users', [UserController::class, 'getAllUsers']);


require __DIR__.'/auth.php';
