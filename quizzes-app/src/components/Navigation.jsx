import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation({ isLoggedIn }) {
    return(
        <Navbar style={{ margin: "0 2rem" }}>                   
            <Navbar.Brand>
                <NavLink 
                    to='/'
                    style={{
                        color: "black",
                        textDecoration: "none"
                    }}
                >
                    Home
                </NavLink>
            </Navbar.Brand>
            <Nav>
            {/* if user is logged in, display the logout button. */}
            {isLoggedIn 
                ? <NavLink to='/logout' style={{ color: "grey", textDecoration: "none" }}>Logout</NavLink>
                : <a href='https://github.com/login/oauth/authorize?client_id=0bb5026e643acb2bfbf1'>Login</a>
            }
            </Nav>
        </Navbar>
    )
}

export default Navigation