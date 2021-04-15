import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="kategori">
                <div className="kategori-nim"><b>NIM</b></div>
                <p className="kategori-nama"><b>Nama</b></p>
                <p className="kategori-alamat"><b>Alamat</b></p>
                <p className="kategori-hp"><b>HP</b></p>
                <p className="kategori-angkatan"><b>Angkatan</b></p>
                <p className="kategori-status"><b>Status</b></p>
            </div>
            <div className="konten-mahasiswa">
            <div className="nim-mahasiswa"><b>: {props.nimMahasiswa}</b></div>
                    <p className="nama-mahasiswa"><b>: {props.nama}</b></p>
                    <p className="alamat-mahasiswa"><b>: {props.alamat}</b></p>
                    <p className="hp-mahasiswa"><b>: {props.hp}</b></p>
                    <p className="angkatan-mahasiswa"><b>: {props.angkatan}</b></p>
                    <p className="status-mahasiswa"><b>: {props.status}</b></p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;

