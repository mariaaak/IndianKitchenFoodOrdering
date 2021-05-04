<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ExploreType;

class ExploreTypeController extends Controller
{
    //
    function addExplore(Request $req){
        $explore=new ExploreType;
        $explore->itemType=$req->input('type');
        $explore->description=$req->input('description');
        $explore->image=$req->file('img')->store('explore');
        $explore->save();

        return $explore;
    }

    function deleteExplore(Request $req){
    
        $explore=ExploreType::find($req->typeId)->delete();
        $explore=ExploreType::all();
        return $explore;
        
    }

    function viewExplore(){
        $explore=ExploreType::all();
        return $explore;
    }

}
