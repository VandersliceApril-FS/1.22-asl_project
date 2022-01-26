import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const styles = {
    loginContentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButton: {
        width: '100%'
    },
    loginTitle: {
        margin: '0 0 2rem 0'
    }
}

function Login() {
    return (
        <div style={styles.loginContentContainer}>
            <h1 style={styles.loginTitle}> Quizzes Login</h1>
            <Form style={{ width: '100%' }} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Form.Text className="text-muted">
                    These inputs are for show only. Click below to login with github.
                </Form.Text>
            </Form>
            <Button style={styles.loginButton} className="mt-5" href="https://github.com/login/oauth/authorize?client_id=0bb5026e643acb2bfbf1" variant="dark">
                    Login
            </Button>
        </div>
    )
}

export default Login