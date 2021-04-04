import React from "react";

const Setrika = (props) => {
    return (
        <div className="setrika">
            <div className="konten-setrika">
                <div className="gambar-setrika"><img src={props.gambar} alt="" /></div>
                <div className="isi-setrika">
                    ID : {props.id}<br />
                    Nama : {props.nama}<br />
                    Harga : Rp. {props.harga}<br />
                    Stok : {props.stok}
                </div>
                <button className="btn btn-sm btn-warning" onClick={props.tambahSetrika.bind(this, props.id)}>Beli</button>
            </div>
        </div>
    )
}

export default Setrika;