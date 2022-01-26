import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const styles = {
    navbar: {
        display: 'flex',
        width: '90%',
        margin: '0 auto',
        justifyContent: 'center',
    },
    homebutton: {
        marginRight: '1rem',
        color: 'black',
        textDecoration: 'none'
    }
}

function Navigation({ isLoggedIn }) {
    return(
        <Navbar style={styles.navbar}>                   
            <Navbar.Brand>
                <NavLink
                    style={styles.homebutton}
                    to='/'
            
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