import React from 'react'
import { NavLink } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

const styles = {
    loginContainer: {
        display: 'flex',
        width: '30rem',
        height: '30rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        
    }
}
function Logout() {
    return (
        <div style={styles.loginContainer}>
            <Alert variant='success'>
                <Alert.Heading>Success!</Alert.Heading>
                <p>You have been logged out successfully.</p>
            </Alert>
            <NavLink to='/'>Return Home</NavLink>
        </div>
    )
}

export default Logout