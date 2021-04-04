import React, { Component } from "react";
import './Setrika.css';
import PostKeranjang from "../../component/Setrika/Keranjang";

class KeranjangPost extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang') // alamat URL API yang ingin diambil datanya
            .then(response => response.json()) // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3002/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    handleHapusKeranjang = (data) => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: 'DELETE' }) // Alamat url API yang ingin dihapus datanya
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        var no = 0;
        var total = 0;
        return (
            <div>
                <div style={{ backgroundColor: '#20B2AA' }}>
                    <br></br>
                    <center><h2>Keranjang</h2></center>
                    <hr></hr><hr></hr>
                </div>
                <div className="container">
                    <table className="table table-hover" cellpadding="5" width="100%">
                        <thead>
                            <tr>
                                <th scope="col" bgcolor='#66CDAA'>No</th>
                                <th scope="col" bgcolor='#66CDAA'>ID Produk</th>
                                <th scope="col" bgcolor='#66CDAA'>Gambar</th>
                                <th scope="col" bgcolor='#66CDAA'>Nama</th>
                                <th scope="col" bgcolor='#66CDAA'>Harga</th>
                                <th scope="col" bgcolor='#66CDAA'>Qty</th>
                                <th scope="col" bgcolor='#66CDAA'>Subtotal</th>
                                <th bgcolor='#66CDAA'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listKeranjang.map(setrika => {
                                    no += 1;
                                    total += setrika.harga * setrika.qty
                                    return (
                                        <PostKeranjang
                                            no={no}
                                            key={setrika.id}
                                            id={setrika.id}
                                            gambar={setrika.gambar}
                                            nama={setrika.nama}
                                            harga={setrika.harga}
                                            stok={setrika.stok}
                                            qty={setrika.qty}
                                            tambahSetrika={this.handleGetSetrika}
                                            hapusKeranjang={this.handleHapusKeranjang} />
                                    )
                                })
                            }
                            <tr>
                                <td colspan="6" align="right"><b>Total :</b></td>
                                <td align="center">Rp. {total}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default KeranjangPost;