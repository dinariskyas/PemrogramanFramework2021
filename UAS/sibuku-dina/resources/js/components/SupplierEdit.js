import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';

class SupplierEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kode_supplier: '',
            nama_supplier: '',
            no_telp: '',
            alamat: '',
            alert: null,
            message: '',
            errors: []
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleUpdateSupplier = this.handleUpdateSupplier.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {

        const supplierId = this.props.match.params.id

        axios.get(`/api/supplier/edit/${supplierId}`).then(response => {
            this.setState({
                kode_supplier: response.data.kode_supplier,
                nama_supplier: response.data.nama_supplier,
                no_telp: response.data.no_telp,
                alamat: response.data.alamat,
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
        this.props.history.push('/suppliers');
    }

    hideAlert() {
        this.setState({
            alert: null
        });
    }

    handleUpdateSupplier(event) {
        event.preventDefault()
        const supplier = {
            kode_supplier: this.state.kode_supplier,
            nama_supplier: this.state.nama_supplier,
            no_telp: this.state.no_telp,
            alamat: this.state.alamat
        }

        const supplierId = this.props.match.params.id

        axios.put(`/api/supplier/${supplierId}`, supplier)
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
        const { supplier } = this.state
        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2>Form Edit Supplier</h2></center>
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
                                        <form onSubmit={this.handleUpdateSupplier}>
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
                                                <label htmlFor='nama_supplier'>Nama Supplier</label>
                                                <input
                                                    id='nama_supplier'
                                                    type='text'
                                                    className={`form-control ${this.hasErrorFor('nama_supplier') ? 'is-invalid' : ''}`}
                                                    name='nama_supplier'
                                                    value={this.state.nama_supplier}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('nama_supplier')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='no_telp'>No Telp</label>
                                                <textarea
                                                    id='no_telp'
                                                    type='number'
                                                    className={`form-control ${this.hasErrorFor('no_telp') ? 'is-invalid' : ''}`}
                                                    name='no_telp'
                                                    value={this.state.no_telp}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('no_telp')}
                                            </div>
                                            <div className='form-group'>
                                                <label htmlFor='alamat'>Alamat</label>
                                                <textarea
                                                    id='alamat'
                                                    className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                                                    name='alamat'
                                                    value={this.state.alamat}
                                                    onChange={this.handleFieldChange}
                                                />
                                                {this.renderErrorFor('alamat')}
                                            </div>
                                            <Link
                                                className='btn btn-secondary float-left'
                                                to={`/suppliers`}
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
export default SupplierEdit