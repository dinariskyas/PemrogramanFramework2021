<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SupplierController extends Controller
{
    public function index()
    {
        $suppliers = \App\Supplier::all();

        return $suppliers->toJson();
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'kode_supplier' => 'required',
            'nama_supplier' => 'required',
            'no_telp' => 'required',
            'alamat' => 'required',
        ]);

        $project = \App\Supplier::create([
            'kode_supplier' => $validatedData['kode_supplier'],
            'nama_supplier' => $validatedData['nama_supplier'],
            'no_telp' => $validatedData['no_telp'],
            'alamat' => $validatedData['alamat'],
        ]);

        $msg = [
            'success' => true,
            'message' => 'Supplier created successfully!'
        ];

        return response()->json($msg);
    }

    public function getSupplier($id) // for edit and show
    {
        $supplier = \App\Supplier::find($id);

        return $supplier->toJson();
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'kode_supplier' => 'required',
            'nama_supplier' => 'required',
            'no_telp' => 'required',
            'alamat' => 'required',
        ]);

        $supplier = \App\Supplier::find($id);
        $supplier->kode_supplier = $validatedData['kode_supplier'];
        $supplier->nama_supplier = $validatedData['nama_supplier'];
        $supplier->no_telp = $validatedData['no_telp'];
        $supplier->alamat = $validatedData['alamat'];
        $supplier->save();

        $msg = [
            'success' => true,
            'message' => 'Supplier updated successfully'
        ];

        return response()->json($msg);
    }

    public function delete($id)
    {
        $supplier = \App\Supplier::find($id);
        if (!empty($supplier)) {
            $supplier->delete();
            $msg = [
                'success' => true,
                'message' => 'Supplier deleted successfully!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Supplier deleted failed!'
            ];
            return response()->json($msg);
        }
    }
}
