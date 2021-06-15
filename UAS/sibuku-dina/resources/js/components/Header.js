import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#B22222' }}>
        <div class="logo">
            <img
                src={logo}
                width="60"
                height="auto"
                alt="logo" />
        </div>
        <Navbar.Brand><Link className='navbar-brand' to='/' style={{ color: '#FFFAFA' }}  >SIBUKU</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link><Link className='navbar-brand' to='/bukus' style={{ color: '#FFFAFA' }}>Data Buku</Link></Nav.Link>
                <Nav.Link><Link className='navbar-brand' to='/suppliers' style={{ color: '#FFFAFA' }}>Data Supplier</Link></Nav.Link>
                <Nav.Link><Link className='navbar-brand' to='/pembelians' style={{ color: '#FFFAFA' }}>Data Pembelian</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;