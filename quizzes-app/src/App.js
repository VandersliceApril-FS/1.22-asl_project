import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Home from './Home'
import Navigation from './Navigation'
import Login from './Login'
import Quiz from './Quiz'
import queryString from 'querystring'

function App() {
  const [jwt, setJwt] = useState('')
  useEffect(() => {
    async function fetchJwt() {
      const params = queryString.parse(window.location.search.replace(/^\?/, ''))

      console.log(`params: ${params}. params.token: ${params.token}`)

      localStorage.token = params.token
      const response = await axios('http://localhost:3000/auth/token/', {
        headers: {
          token: localStorage.token
        }
      })
      setJwt(response.data.token)
      console.log(response.data.token)
    }
    fetchJwt()
  }, [])

  // when user clicks log out, they should be rerouted to the login page and jwtState should be updated
  if (!jwt) {
    return <Login />;
  }
  return (
    <Router>  
      <div className="app-container">
        <Navigation isLoggedIn={jwt ? true : false} />
        <div className="main-content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/quizzes/:id' element={<Quiz />} />
            <Route exact path='/logout' element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
