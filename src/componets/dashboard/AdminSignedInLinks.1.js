import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/admindb'>Dashboard</NavLink></li>
            <li><NavLink to='/poolside'>Pool Side</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating light-blue">AL</NavLink></li>
        </ul>
    )
}

export default AdminSignedInLinks