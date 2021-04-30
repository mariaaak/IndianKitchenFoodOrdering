<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{
    
    function addUser(Request $req){
        $member=new User;
        $member->name=$req->name;
        $member->email=$req->email;
        $member->password=Hash::make($req->password);
        $member->phone=$req->phone;
        $member->location=$req->location;
        $member->save();
    
        return $member;
        
    }

    function login(Request $req)
    {
        $data=User::where('email',$req->email)->get()->first();
        if(Hash::check($req->password,$data->password))
        {
           return $data;
        }
  
    }

    function viewUser(){
        
        $user=User::all();
        return $user;
    }

   
    function deleteUser(Request $req){
        $user=User::find($req->userId)->delete();
        $user=User::all();
        return $user;
    }
}
