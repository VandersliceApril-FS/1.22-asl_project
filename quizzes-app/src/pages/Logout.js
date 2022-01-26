import React from 'react'
import { NavLink } from 'react-router-dom'

function Logout() {
    return (
        <div>
            <p>You hvae been logged out.</p>
            <NavLink to='/'>Return Home</NavLink>
        </div>
    )
}

export default Logout