import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
import { FaTimesCircle, FaEdit, FaPlusCircle, FaMixer } from 'react-icons/fa'

class PembelianIndex extends Component {

    constructor() {
        super()
        this.state = {
            pembelians: [],
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
        axios.get('/api/pembelians').then(response => {
            this.setState({
                pembelians: response.data
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
        axios.delete(`/api/pembelian/delete/${id}`).then(response => {
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
                Deleted pembelian successfully
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
        const { pembelians } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2><FaMixer /> Daftar Pembelian</h2></center>
                    <hr></hr><br></br>
                    <div style={{ backgroundColor: '#FAEBD7' }}></div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <br></br>
                    <div className="container">
                        <Link className='btn btn-primary' to='/createPembelian'>
                            <FaPlusCircle /> Create New Pembelian
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
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Kode Supplier</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Nama Buku</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Tanggal</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Bukti Pembelian</th>
                                        <th scope="col" className="text-center" bgcolor='#FFA07A'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pembelians.map((pembelian, i) => (
                                        <tr key={i}>
                                            <td className="text-center">{i + 1}</td>
                                            <td className="text-center">{pembelian.kode_supplier}</td>
                                            <td className="text-center">{pembelian.nama_buku}</td>
                                            <td className="text-center">{pembelian.tanggal}</td>
                                            <td className="text-center"><img src={pembelian.bukti_pembelian} style={{ maxWidth: '200px', maxHeight: '200px' }} /></td>
                                            <td className="text-center">
                                                <div className="btn-group">
                                                    <Link
                                                        className='btn btn-success'
                                                        to={`/pembelian/edit/${pembelian.id}`}
                                                    ><FaEdit /> Edit
                                                    </Link>

                                                    <button
                                                        className='btn btn-danger'
                                                        onClick={() => this.confirmDelete(pembelian.id)}
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

export default PembelianIndex