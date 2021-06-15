import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BukuShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buku: {}
        }
    }

    componentDidMount() {

        const bukuId = this.props.match.params.id

        axios.get(`/api/buku/${bukuId}`).then(response => {
            this.setState({
                buku: response.data
            })
        })
    }

    render() {
        const { buku } = this.state

        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2> Detail Buku</h2></center>
                    <hr></hr><br></br>
                    <div style={{ backgroundColor: '#FAEBD7' }}></div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <div className='container py-4'>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                                <div className='card'>
                                    <div className='card-header' style={{ backgroundColor: '#D3D3D3' }}>Judul Buku: {buku.judul_buku}</div>
                                    <div className='card-body' style={{ backgroundColor: '#E6E6FA' }}>
                                        <p>Kode Buku : {buku.kode_buku}</p>
                                        <p>ISBN : {buku.ISBN}</p>
                                        <p>Gambar : <img src={buku.gambar} style={{ maxWidth: '200px', maxHeight: '200px' }} /></p>
                                        <p>Pengarang Buku : {buku.pengarang_buku}</p>
                                        <p>Penerbit Buku : {buku.penerbit_buku}</p>
                                        <p>Tahun Penerbit : {buku.tahun_penerbit}</p>
                                        <Link
                                            className='btn btn-primary'
                                            to={`/bukus`}
                                        >Back
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default BukuShow