import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const AdminSignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/admindb'>Dashboard</NavLink></li>
            <li><NavLink to='/poolside'>Pool Side</NavLink></li>
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

export default connect(null, mapDispatch)(AdminSignedInLinks) 