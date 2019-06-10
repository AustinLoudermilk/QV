import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const MemSignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/memberdb'>Dashboard</NavLink></li>
            <li><a onClick={ props.signOut }>Sign Out</a></li>
            <li><NavLink to='/dashboard' className="btn btn-floating light-blue darken-4">{ props.profile.intitals }</NavLink></li>
        </ul>
    )
}

const mapDispatch = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatch)(MemSignedInLinks)