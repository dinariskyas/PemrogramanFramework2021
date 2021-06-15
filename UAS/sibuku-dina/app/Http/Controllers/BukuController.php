<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BukuController extends Controller
{
    public function index()
    {
        $bukus = \App\Buku::all();

        return $bukus->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode_buku' => 'required',
            'ISBN' => 'required',
            'judul_buku' => 'required',
            'gambar' => 'required',
            'pengarang_buku' => 'required',
            'penerbit_buku' => 'required',
            'tahun_penerbit' => 'required',
        ]);

        $project = \App\Buku::create([
            'kode_buku' => $validatedData['kode_buku'],
            'ISBN' => $validatedData['ISBN'],
            'judul_buku' => $validatedData['judul_buku'],
            'gambar' => $validatedData['gambar'],
            'pengarang_buku' => $validatedData['pengarang_buku'],
            'penerbit_buku' => $validatedData['penerbit_buku'],
            'tahun_penerbit' => $validatedData['tahun_penerbit'],
        ]);

        $msg = [
            'success' => true,
            'message' => 'Book created successfully!'
        ];

        return response()->json($msg);
    }

    public function getBuku($id) // for edit and show
    {
        $buku = \App\Buku::find($id);

        return $buku->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'kode_buku' => 'required',
            'ISBN' => 'required',
            'judul_buku' => 'required',
            'gambar' => 'required',
            'pengarang_buku' => 'required',
            'penerbit_buku' => 'required',
            'tahun_penerbit' => 'required',
        ]);

        $buku = \App\Buku::find($id);
        $buku->kode_buku = $validatedData['kode_buku'];
        $buku->ISBN = $validatedData['ISBN'];
        $buku->judul_buku = $validatedData['judul_buku'];
        $buku->gambar = $validatedData['gambar'];
        $buku->pengarang_buku = $validatedData['pengarang_buku'];
        $buku->penerbit_buku = $validatedData['penerbit_buku'];
        $buku->tahun_penerbit = $validatedData['tahun_penerbit'];
        $buku->save();

        $msg = [
            'success' => true,
            'message' => 'Book updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $buku = \App\Buku::find($id);
        if (!empty($buku)) {
            $buku->delete();
            $msg = [
                'success' => true,
                'message' => 'Book deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Book deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
