import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class BukuEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kode_buku: '',
            ISBN: '',
            judul_buku: '',
            gambar: '',
            pengarang_buku: '',
            penerbit_buku: '',
            tahun_penerbit: '',
            alert: null,
            message: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdateBuku = this.handleUpdateBuku.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {

        const bukuId = this.props.match.params.id

        axios.get(`/api/buku/edit/${bukuId}`).then(response => {
            this.setState({
                kode_buku: response.data.kode_buku,
                ISBN: response.data.ISBN,
                judul_buku: response.data.judul_buku,
                gambar: response.data.gambar,
                pengarang_buku: response.data.pengarang_buku,
                penerbit_buku: response.data.penerbit_buku,
                tahun_penerbit: response.data.tahun_penerbit,
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
        this.props.history.push('/bukus');
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleUpdateBuku(event) {
        event.preventDefault()
        const buku = {
            kode_buku: this.state.kode_buku,
            ISBN: this.state.ISBN,
            judul_buku: this.state.judul_buku,
            gambar: this.state.gambar,
            pengarang_buku: this.state.pengarang_buku,
            penerbit_buku: this.state.penerbit_buku,
            tahun_penerbit: this.state.tahun_penerbit
        }

        const bukuId = this.props.match.params.id

        axios.put(`/api/buku/${bukuId}`, buku)
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
        const { buku } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2>Form Edit Buku</h2></center>
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
                                        <form onSubmit={this.handleUpdateBuku}>
                                            <div className='form-group'>
                                                <label htmlFor='kode_buku'>Kode Buku</label>
                                                <input
                                                    id='kode_buku'
                                                    type='number'
                                                    className={`form-control ${this.hasErrorFor('kode_buku') ? 'is-invalid' : ''}`}
                                                    name='kode_buku'
                                                    value={this.state.kode_buku}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('kode_buku')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='ISBN'>ISBN</label>
                                                <textarea
                                                    id='ISBN'
                                                    type='number'
                                                    className={`form-control ${this.hasErrorFor('ISBN') ? 'is-invalid' : ''}`}
                                                    name='ISBN'
                                                    value={this.state.ISBN}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('ISBN')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='judul_buku'>Judul Buku</label>
                                                <textarea
                                                    id='judul_buku'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('judul_buku') ? 'is-invalid' : ''}`}
                                                    name='judul_buku'
                                                    value={this.state.judul_buku}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('judul_buku')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='gambar'>Gambar</label>
                                                <textarea
                                                    id='gambar'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('gambar') ? 'is-invalid' : ''}`}
                                                    name='gambar'
                                                    value={this.state.gambar}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('gambar')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='pengarang_buku'>Pengarang Buku</label>
                                                <textarea
                                                    id='pengarang_buku'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('pengarang_buku') ? 'is-invalid' : ''}`}
                                                    name='pengarang_buku'
                                                    value={this.state.pengarang_buku}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('pengarang_buku')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='penerbit_buku'>Penerbit Buku</label>
                                                <textarea
                                                    id='penerbit_buku'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('penerbit_buku') ? 'is-invalid' : ''}`}
                                                    name='penerbit_buku'
                                                    value={this.state.penerbit_buku}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('penerbit_buku')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='tahun_penerbit'>Tahun Penerbit</label>
                                                <textarea
                                                    id='tahun_penerbit'
                                                    type='number'
                                                    className={`form-control ${this.hasErrorFor('tahun_penerbit') ? 'is-invalid' : ''}`}
                                                    name='tahun_penerbit'
                                                    value={this.state.tahun_penerbit}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('tahun_penerbit')}
                                            </div>
                                            <Link
                                                className='btn btn-secondary float-left'
                                                to={`/bukus`}
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
export default BukuEdit