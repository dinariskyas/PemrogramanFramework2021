<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PembelianController extends Controller
{
    public function index()
    {
        $pembelians = \App\Pembelian::all();

        return $pembelians->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode_supplier' => 'required',
            'nama_buku' => 'required',
            'tanggal' => 'required',
            'bukti_pembelian' => 'required',
        ]);

        $project = \App\Pembelian::create([
            'kode_supplier' => $validatedData['kode_supplier'],
            'nama_buku' => $validatedData['nama_buku'],
            'tanggal' => $validatedData['tanggal'],
            'bukti_pembelian' => $validatedData['bukti_pembelian'],
        ]);

        $msg = [
            'success' => true,
            'message' => 'Pembelian created successfully!'
        ];

        return response()->json($msg);
    }

    public function getPembelian($id) // for edit and show
    {
        $Pembelian = \App\Pembelian::find($id);

        return $Pembelian->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'kode_supplier' => 'required',
            'nama_buku' => 'required',
            'tanggal' => 'required',
            'bukti_pembelian' => 'required',
        ]);

        $Pembelian = \App\Pembelian::find($id);
        $Pembelian->kode_supplier = $validatedData['kode_supplier'];
        $Pembelian->nama_buku = $validatedData['nama_buku'];
        $Pembelian->tanggal = $validatedData['tanggal'];
        $Pembelian->bukti_pembelian = $validatedData['bukti_pembelian'];
        $Pembelian->save();

        $msg = [
            'success' => true,
            'message' => 'Pembelian updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $Pembelian = \App\Pembelian::find($id);
        if (!empty($Pembelian)) {
            $Pembelian->delete();
            $msg = [
                'success' => true,
                'message' => 'Pembelian deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Pembelian deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
