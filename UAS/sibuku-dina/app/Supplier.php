<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    protected $table = "suppliers";
    protected $fillable = [
        'kode_supplier', 'nama_supplier', 'no_telp', 'alamat',
    ];
}
