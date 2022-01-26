import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Quiz from '../Quiz'

const MyRoutes = () => (
    <Routes>
        <Route exact path='/' component={<Home />} />
        <Route path='/quizzes/:id' component={<Quiz />} />
        <Route path='/logout' component={<Home />} />
    </Routes>
)

export default MyRoutes