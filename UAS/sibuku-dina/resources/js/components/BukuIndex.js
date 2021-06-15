import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaTimesCircle, FaEdit, FaInfoCircle, FaPlusCircle, FaBook } from 'react-icons/fa'

class BukuIndex extends Component {

    constructor() {
        super()
        this.state = {
            bukus: [],
            msg: null,
            type: null,
            flash: false,
            alert: null,
        }
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    componentDidMount() {
        axios.get('/api/bukus').then(response => {
            this.setState({
                bukus: response.data
            })
        })
    }

    confirmDelete(id) {
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="default"
                cancelBtnBsStyle="danger"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
            >
                Kalau udah dihapus, nggak bakal balik lagi.
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    deleteItem(id) {
        axios.delete(`/api/buku/delete/${id}`).then(response => {
            var msg = response.data.success;
            if (msg == true) {
                this.hideAlert();
                this.goToHome();
            }
        })
    }

    goToHome() {
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess()}
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
            >
                Deleted book successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.componentDidMount();
        this.hideAlert();
    }

    render() {
        const { bukus } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2><FaBook /> Daftar Buku</h2></center>
                    <hr></hr><br></br>
                    <div style={{ backgroundColor: '#FAEBD7' }}></div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <br></br>
                    <div className="container">
                        <Link className='btn btn-primary' to='/create'>
                            <FaPlusCircle /> Create New Book
                        </Link>

                    </div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <br></br>
                    <div className="container">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>No</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Kode Buku</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>ISBN</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Judul Buku</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Gambar</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bukus.map((buku, i) => (
                                        <tr key={i}>
                                            <td className="text-center">{i + 1}</td>
                                            <td className="text-center">{buku.kode_buku}</td>
                                            <td className="text-center">{buku.ISBN}</td>
                                            <td className="text-center">{buku.judul_buku}</td>
                                            <td className="text-center"><img src={buku.gambar} style={{ maxWidth: '200px', maxHeight: '200px' }} /></td>
                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <Link
                                                        className='btn btn-primary'
                                                        to={`/buku/${buku.id}`}
                                                    > <FaInfoCircle /> Detail
                                                    </Link>

                                                    <Link
                                                        className='btn btn-success'
                                                        to={`/buku/edit/${buku.id}`}
                                                    ><FaEdit /> Edit
                                                    </Link>

                                                    <button
                                                        className='btn btn-danger'
                                                        onClick={() => this.confirmDelete(buku.id)}
                                                    ><FaTimesCircle /> Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {this.state.alert}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default BukuIndex