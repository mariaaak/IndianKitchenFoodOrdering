<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ExploreTypeController;
use App\Http\Controllers\ReservationController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// USER ROUTES

//Sign Up User
Route::post('signUpUser',[UserController::class,'addUser']);

//Sign in User
Route::post('signInUser',[UserController::class,'login']);

//Delete User
Route::post('deleteUser',[UserController::class,'deleteUser']);

//View Item
Route::get('viewUser',[UserController::class,'viewUser']);


//ITEM ROUTES

//Add Item
Route::post('addItem',[ItemController::class,'addItem']);

//Delete Item
Route::post('deleteItem',[ItemController::class,'deleteItem']);

//View Item
Route::get('viewItem',[ItemController::class,'viewItem']);



//PAYMENT ROUTES

//Add Payment
Route::post('addPayment',[PaymentController::class,'addPayment']);

//View Payment
Route::get('viewPayment',[PaymentController::class,'viewPayment']);

Route::post('deletePayment',[PaymentController::class,'deletePayment']);

//EXPLORE TYPE ROUTES

//Add Cuisine
Route::post('addCuisine',[ExploreTypeController::class,'addExplore']);

//Delete Cuisine
Route::post('deleteCuisine',[ExploreTypeController::class,'deleteExplore']);

//View Cuisine
Route::get('viewCuisine',[ExploreTypeController::class,'viewExplore']);


//RESERVATION ROUTES

//Make Reservation
Route::post('makeReservation',[ReservationController::class,'makeReservation']);

//View Reservation
Route::get('viewReservation',[ReservationController::class,'viewReservation']);

//Status Reservation
Route::post('statusReservation',[ReservationController::class,'updateStatus']);