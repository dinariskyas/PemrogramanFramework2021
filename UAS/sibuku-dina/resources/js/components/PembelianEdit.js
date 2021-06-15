import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class PembelianEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kode_supplier: '',
            nama_buku: '',
            tanggal: '',
            bukti_pembelian: '',
            alert: null,
            message: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdatePembelian = this.handleUpdatePembelian.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {

        const pembelianId = this.props.match.params.id

        axios.get(`/api/pembelian/edit/${pembelianId}`).then(response => {
            this.setState({
                kode_supplier: response.data.kode_supplier,
                nama_buku: response.data.nama_buku,
                tanggal: response.data.tanggal,
                bukti_pembelian: response.data.bukti_pembelian,
            })
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
                {this.state.message}
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }

    onSuccess() {
        this.props.history.push('/pembelians');
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleUpdatePembelian(event) {
        event.preventDefault()
        const pembelian = {
            kode_supplier: this.state.kode_supplier,
            nama_buku: this.state.nama_buku,
            tanggal: this.state.tanggal,
            bukti_pembelian: this.state.bukti_pembelian
        }

        const pembelianId = this.props.match.params.id

        axios.put(`/api/pembelian/${pembelianId}`, pembelian)
            .then(response => {
                // redirect to the homepage
                var msg = response.data.success;
                if (msg == true) {
                    this.setState({
                        message: response.data.message
                    })
                    return this.goToHome();
                }

            });
    }

    hasErrorFor(field) {
        return !!this.state.errors[field]
    }

    renderErrorFor(field) {
        if (this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render() {
        const { pembelian } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2>Form Edit Pembelian</h2></center>
                    <hr></hr><br></br>
                    <div style={{ backgroundColor: '#FAEBD7' }}></div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <div className='container py-4'>
                        <div className='row justify-content-center'>
                            <div className='col-md-6'>
                                <div className='card'>
                                    <div className='card-header' style={{ backgroundColor: '#D3D3D3' }}>Update New Project</div>
                                    <div className='card-body' style={{ backgroundColor: '#E6E6FA' }}>
                                        <form onSubmit={this.handleUpdatePembelian}>
                                            <div className='form-group'>
                                                <label htmlFor='kode_supplier'>Kode Supplier</label>
                                                <input
                                                    id='kode_supplier'
                                                    type='number'
                                                    className={`form-control ${this.hasErrorFor('kode_supplier') ? 'is-invalid' : ''}`}
                                                    name='kode_supplier'
                                                    value={this.state.kode_supplier}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('nama_supplier')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='nama_buku'>Nama Buku</label>
                                                <input
                                                    id='nama_buku'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('nama_buku') ? 'is-invalid' : ''}`}
                                                    name='nama_buku'
                                                    value={this.state.nama_buku}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('nama_buku')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='tanggal'>Tanggal</label>
                                                <textarea
                                                    id='tanggal'
                                                    type='date'
                                                    className={`form-control ${this.hasErrorFor('tanggal') ? 'is-invalid' : ''}`}
                                                    name='tanggal'
                                                    value={this.state.tanggal}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('tanggal')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='bukti_pembelian'>Bukti Pembelian</label>
                                                <textarea
                                                    id='bukti_pembelian'
                                                    className={`form-control ${this.hasErrorFor('bukti_pembelian') ? 'is-invalid' : ''}`}
                                                    name='bukti_pembelian'
                                                    value={this.state.bukti_pembelian}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('bukti_pembelian')}
                                            </div>
                                            <Link
                                                className='btn btn-secondary float-left'
                                                to={`/pembelians`}
                                            >Back
                                            </Link>
                                            <button className='btn btn-primary float-right'>Update</button>
                                            {this.state.alert}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PembelianEdit