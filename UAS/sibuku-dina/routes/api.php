<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/bukus', 'BukuController@index');
Route::post('/buku/store', 'BukuController@store');
Route::get('/buku/edit/{id}', 'BukuController@getBuku');
Route::get('/buku/{id}', 'BukuController@getBuku');
Route::put('/buku/{id}', 'BukuController@update');
Route::delete('/buku/delete/{id}', 'BukuController@delete');

Route::get('/suppliers', 'SupplierController@index');
Route::post('/supplier/store', 'SupplierController@store');
Route::get('/supplier/edit/{id}', 'SupplierController@getSupplier');
Route::get('/supplier/{id}', 'SupplierController@getSupplier');
Route::put('/supplier/{id}', 'SupplierController@update');
Route::delete('/supplier/delete/{id}', 'SupplierController@delete');

Route::get('/pembelians', 'PembelianController@index');
Route::post('/pembelian/store', 'PembelianController@store');
Route::get('/pembelian/edit/{id}', 'PembelianController@getPembelian');
Route::get('/pembelian/{id}', 'PembelianController@getPembelian');
Route::put('/pembelian/{id}', 'PembelianController@update');
Route::delete('/pembelian/delete/{id}', 'PembelianController@delete');
