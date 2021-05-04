<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    //
    function makeReservation(Request $req){
        $reservation=new Reservation;
        $reservation->name=$req->name;
        $reservation->date=$req->date;
        $reservation->time=$req->time;
        $reservation->phone=$req->phone;
        $reservation->email=$req->email;
        $reservation->status="not confirmed";

        $reservation->save();
        return $reservation;
    }

    function viewReservation(Request $req){
        $reservation=Reservation::all();

        return $reservation;
    }

    function updateStatus(Request $req){
        $reservation=Reservation::where('reservationId',$req->user)->first();
        $reservation->status=$req->status;
        $reservation->save();

        return $reservation;
        
    }
}
