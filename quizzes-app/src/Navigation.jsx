import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Navigation extends React.Component
{
    render() {
        return(
            <header>
                <Navbar>
                    <Container>
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
                    </Container>
                </Navbar>
            </header>
        )
    }
}

export default Navigation