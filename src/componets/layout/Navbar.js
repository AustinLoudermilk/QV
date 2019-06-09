import React from 'react'
import { Link } from 'react-router-dom'
import AdminSignedInLinks from './AdminSignedInLinks'
import MemSignedInLinks from './MemSignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;

    let links = null;

    if(auth.uid) {
        if(profile.isAdmin) links = <AdminSignedInLinks profile={ profile } />
        else links = <MemSignedInLinks profile={ profile } />
    } else links = <SignedOutLinks/>;

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
                { links }
            </div>
        </nav>
    )
}

const maptState = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(maptState)(Navbar);