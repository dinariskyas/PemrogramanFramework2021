import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SupplierShow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            supplier: {}
        }
    }

    componentDidMount() {

        const supplierId = this.props.match.params.id

        axios.get(`/api/supplier/${supplierId}`).then(response => {
            this.setState({
                supplier: response.data
            })
        })
    }

    render() {
        const { supplier } = this.state

        return (
            <div>
                <div style={{ backgroundColor: '#F08080' }}>
                    <br></br>
                    <center><h2> Detail Supplier</h2></center>
                    <hr></hr><br></br>
                    <div style={{ backgroundColor: '#FAEBD7' }}></div>
                </div>
                <div style={{ backgroundColor: '#FAEBD7' }}>
                    <div className='container py-4'>
                        <div className='row justify-content-center'>
                            <div className='col-md-8'>
                                <div className='card'>
                                    <div className='card-header' style={{ backgroundColor: '#D3D3D3' }}>Nama Supplier: {supplier.nama_supplier}</div>
                                    <div className='card-body' style={{ backgroundColor: '#E6E6FA' }}>
                                        <p>Kode Supplier: {supplier.kode_supplier}</p>
                                        <p>No Telp: {supplier.no_telp}</p>
                                        <p>Alamat : {supplier.alamat}</p>
                                        <Link
                                            className='btn btn-primary'
                                            to={`/suppliers`}
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

export default SupplierShow