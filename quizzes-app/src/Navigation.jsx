import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

class Navigation extends React.Component
{
    render() {
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
                    {this.props.isLoggedIn && 
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
}

export default Navigation