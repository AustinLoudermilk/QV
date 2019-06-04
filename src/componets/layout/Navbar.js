import React from 'react'
import { Link } from 'react-router-dom'
import AdminSignedInLinks from './AdminSignedInLinks'
import MemSignedInLinks from './MemSignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="qv-logo">
                    <img
                    src = "/img/QV-Logo.png"
                    className = "d-inline-block align-top"
                    alt = "QV"
                    />
                </Link>
                <AdminSignedInLinks/>
            </div>
        </nav>
    )
}

export default Navbar
