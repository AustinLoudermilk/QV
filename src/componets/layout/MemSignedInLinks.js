import React from 'react'
import { NavLink } from 'react-router-dom'

const MemSignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/memberdb'>Dashboard</NavLink></li>
            <li><NavLink to='/events'>Events</NavLink></li>
            <li><NavLink to='/'>Sign Out</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating light-blue darken-4">AL</NavLink></li>
        </ul>
    )
}

export default MemSignedInLinks