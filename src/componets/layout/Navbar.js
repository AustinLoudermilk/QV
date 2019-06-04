import React from 'react'
import { Link } from 'react-router-dom'
import AdminSignedInLinks from './AdminSignedInLinks'
import MemSignedInLinks from './MemSignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">QV</Link>
                <AdminSignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar