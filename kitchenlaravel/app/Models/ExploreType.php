<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExploreType extends Model
{
    use HasFactory;
    public $table="explore_type";
    protected $primaryKey="typeId";
    public $timestamps=false;
}
