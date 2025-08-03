<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactRecent extends Model
{
    use HasFactory;
    protected $fillable = ['nom', 'enregistrementSIM', 'momentVoir'];
}
