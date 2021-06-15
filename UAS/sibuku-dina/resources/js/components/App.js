import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomeIndex from './HomeIndex'
import BukuIndex from './BukuIndex'
import BukuCreate from './BukuCreate'
import BukuShow from './BukuShow'
import BukuEdit from './BukuEdit'
import SupplierIndex from './SupplierIndex'
import SupplierCreate from './SupplierCreate'
import SupplierEdit from './SupplierEdit'
import SupplierShow from './SupplierShow'
import PembelianIndex from './PembelianIndex'
import PembelianCreate from './PembelianCreate'
import PembelianEdit from './PembelianEdit'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomeIndex} />
                        <Route exact path='/bukus' component={BukuIndex} />
                        <Route exact path='/create' component={BukuCreate} />
                        <Route path='/buku/edit/:id' component={BukuEdit} />
                        <Route path='/buku/:id' component={BukuShow} />

                        <Route exact path='/suppliers' component={SupplierIndex} />
                        <Route exact path='/createSupplier' component={SupplierCreate} />
                        <Route path='/supplier/edit/:id' component={SupplierEdit} />
                        <Route path='/buku/:id' component={SupplierShow} />

                        <Route exact path='/pembelians' component={PembelianIndex} />
                        <Route exact path='/createPembelian' component={PembelianCreate} />
                        <Route path='/pembelian/edit/:id' component={PembelianEdit} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
