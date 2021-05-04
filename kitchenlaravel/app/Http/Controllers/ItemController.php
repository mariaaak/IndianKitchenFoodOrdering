<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    function addItem(Request $req){
        $item = new Item;
        $item->itemName=$req->input('name');
        $item->itemType=$req->input('type');
        $item->price=$req->input('price');
        $item->avail=$req->input('avail');
        if($req->hasFile('img')){
            $item->itemImage=$req->file('img')->store('items');
        }
        
        #$filename=$file->getClientOriginalName();
        $item->save();

        return $item;

    }

    function viewItem(){
        
        $item=Item::all();
        return $item;
    }

    function deleteItem(Request $req){
        $item=Item::find($req->itemId)->delete();
        $item=Item::all();
        return $item;
    }

}
