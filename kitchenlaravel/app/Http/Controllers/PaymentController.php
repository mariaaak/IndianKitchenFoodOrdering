<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    //
    function addPayment(Request $req){
        $payment=new Payment;
        $payment->userId=$req->userId;
        $payment->mode=$req->mode;
        $payment->amount=$req->amount;
        $payment->deliveryLocation=$req->location;
        $payment->date=date("Y-m-d H:i:s");
        $payment->save();

        return $payment;
    }

    function viewPayment(){
        
        $payment=Payment::all();
        return $payment;
    }

    function deletePayment(Request $req){
        $payment=Payment::find($req->paymentId)->delete();
        $payment=Payment::all();
        return $payment;
    }

}