import React from 'react'

class Login extends React.Component
{
    render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Login with github below:</p>
                <a href='https://github.com/login/oauth/authorize?client_id=0bb5026e643acb2bfbf1'>Login with Github</a>
            </div>
        )
    }
}

export default Login