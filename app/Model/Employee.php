<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
     protected $fillable = [
        'name', 'email', 'phone','salary','address','photo','joining_date','nid'
    ];
}
