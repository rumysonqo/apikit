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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/mostrar_todo','App\Http\Controllers\ctrl_kits@mostrar_todo');
Route::get('/buscar_todo/{cad}','App\Http\Controllers\ctrl_kits@buscar_todo');
Route::get('/programas','App\Http\Controllers\ctrl_kits@programas');
Route::get('/kit_por_programa/{prg}','App\Http\Controllers\ctrl_kits@kit_por_programa');
Route::get('/kit_por_programa_cadena/{prg}/{cad}','App\Http\Controllers\ctrl_kits@kit_por_programa_cadena');

Route::get('/prog_metas/{prg}','App\Http\Controllers\ctrl_kits@prog_metas');
Route::get('/kit_por_programa_meta/{prg}/{met}','App\Http\Controllers\ctrl_kits@kit_por_programa_meta');
Route::get('/kit_por_programa_meta_cadena/{prg}/{met}/{cadena}','App\Http\Controllers\ctrl_kits@kit_por_programa_meta_cadena');
Route::get('/metas','App\Http\Controllers\ctrl_kits@metas');
Route::get('/tareas/{met}','App\Http\Controllers\ctrl_kits@tareas');
Route::get('/kit_por_meta/{met}','App\Http\Controllers\ctrl_kits@kit_por_meta');
Route::get('/kit_por_meta_cadena/{met}/{cad}','App\Http\Controllers\ctrl_kits@kit_por_meta_cadena');
Route::get('/kit_por_meta_tarea/{met}/{tar}','App\Http\Controllers\ctrl_kits@kit_por_meta_tarea');
Route::get('/kit_por_meta_tarea_cadena/{met}/{tar}/{cad}','App\Http\Controllers\ctrl_kits@kit_por_meta_tarea_cadena');
Route::get('/clasificador','App\Http\Controllers\ctrl_kits@clasificador');
Route::get('/kit_por_clasificador/{clf}','App\Http\Controllers\ctrl_kits@kit_por_clasificador');
Route::get('/kit_por_clasificador_cadena/{clf}/{cad}','App\Http\Controllers\ctrl_kits@kit_por_clasificador_cadena');
Route::get('/metas_clasificador/{met}','App\Http\Controllers\ctrl_kits@metas_clasificador');
Route::get('/kit_por_meta_clasificador/{met}/{clf}','App\Http\Controllers\ctrl_kits@kit_por_meta_clasificador');
Route::get('/kit_por_meta_clasificador_cadena/{met}/{clf}/{cad}','App\Http\Controllers\ctrl_kits@kit_por_meta_clasificador_cadena');
