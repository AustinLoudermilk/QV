import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Dashboard</NavLink></li>
            <li><NavLink to='/'>Pool Side</NavLink></li>
            <li><NavLink to='/'>Events</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">AL</NavLink></li>
        </ul>
    )
}

export default AdminSignedInLinks