<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExploreType;

class ExploreTypeController extends Controller
{
    //
    function addExplore(Request $req){
        $explore=new ExploreType;
        $explore->itemType=$req->type;
        $explore->description=$req->description;
        $explore->image=$req->image;
        $explore->save();

        return $explore;
    }

    function deleteExplore(Request $req){
    
        $explore=ExploreType::find($req->id)->first();
        
        $explore->delete();
        
    }

    function viewExplore(){
        $explore=ExploreType::all();

        return $explore;
    }

}
