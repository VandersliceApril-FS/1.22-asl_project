import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation({ isLoggedIn }) {
    
    return(
        <header>
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
                {isLoggedIn && 
                    <NavLink 
                        to='/logout'
                        style={{
                            color: "grey",
                            textDecoration: "none"
                        }}
                    >
                        Logout
                    </NavLink>
                }
                </Nav>
                
            </Navbar>
        </header>
    )
}

export default Navigation