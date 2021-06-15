<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pembelian extends Model
{
    protected $table = "pembelians";
    protected $fillable = [
        'kode_supplier', 'nama_buku', 'tanggal', 'bukti_pembelian',
    ];
}
