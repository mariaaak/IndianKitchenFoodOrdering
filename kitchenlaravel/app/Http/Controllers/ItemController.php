<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    function addItem(Request $req){
        $item = new Item;
        $item->itemName=$req->name;
        $item->itemType=$req->type;
        $item->price=$req->price;
        $item->avail=$req->avail;
        $item->itemImage=$req->img;
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
