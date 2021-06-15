<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{
    protected $table = "bukus";
    protected $fillable = [
        'kode_buku', 'ISBN', 'judul_buku', 'gambar',
        'pengarang_buku', 'penerbit_buku', 'tahun_penerbit'
    ];
}
