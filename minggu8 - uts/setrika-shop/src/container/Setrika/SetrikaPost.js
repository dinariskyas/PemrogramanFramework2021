import React, { Component } from "react";
import './Setrika.css';
import Post from "../../component/Setrika/Setrika";

class SetrikaPost extends Component {
    state = {                //Komponen state dari react untuk statefull Component
        listSetrika: []     //variable array yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/setrika') // alamat URL API yang ingin diambil datanya
            .then(response => response.json()) // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
                this.setState({
                    listSetrika: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetSetrika = data => {
        fetch(`http://localhost:3001/setrika/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataSetrika = { ...this.state.insertKeranjang };
                dataSetrika["id"] = res["id"];
                dataSetrika["gambar"] = res["gambar"];
                dataSetrika["nama"] = res["nama"];
                dataSetrika["harga"] = res["harga"];
                dataSetrika["stok"] = res["stok"];
                dataSetrika["qty"] = 1;
                this.setState({
                    insertKeranjang: dataSetrika
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3002/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                gambar: res["gambar"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

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
                this.ambilDataDariServerAPI(); // Kirimkan ke body request untuk data kulkas yang akan ditambahkan
            });
    }

    render() {
        return (
            <div className="post-setrika">
                <div style={{ backgroundColor: '#20B2AA' }}>
                    <br></br>
                    <center><h2>Daftar Setrika</h2></center>
                    <hr></hr><hr></hr>
                </div>
                <div className="tgh">
                    {
                        this.state.listSetrika.map(setrika => {
                            return (
                                <Post
                                    key={setrika.id}
                                    id={setrika.id}
                                    gambar={setrika.gambar}
                                    nama={setrika.nama}
                                    harga={setrika.harga}
                                    stok={setrika.stok}
                                    tambahSetrika={this.handleGetSetrika} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SetrikaPost;