import React from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Keranjang = (props) => {
    return (
        <tr>
            <td align="center">{props.no}</td>
            <td align="center">{props.id}</td>
            <td align="center"><img src={props.gambar} width="160" height="160" alt="" /></td>
            <td align="center">{props.nama}</td>
            <td align="center">Rp. {props.harga}</td>
            <td align="center">{props.qty}</td>
            <td align="center">Rp. {props.harga * props.qty}</td>
            <td align="center"><button className="btn btn-danger" onClick={() => props.hapusKeranjang(props.id)}><FaTrashAlt />
            </button></td>
        </tr>
    )
}

export default Keranjang;