<?php

use Illuminate\Support\Facades\Route;

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

Route::view('/', 'app');

Route::view('/bukus', 'app');
Route::view('/buku/edit/{id}', 'app');
Route::view('/buku/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');

Route::view('/suppliers', 'app');
Route::view('/supplier/edit/{id}', 'app');
Route::view('/supplier/{id}', 'app');
Route::view('/', 'app');
Route::view('/{path}', 'app');
