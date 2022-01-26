import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import queryString from 'querystring'
import ListGroup from 'react-bootstrap/ListGroup'



function Home() {
	const [quizzes, setQuizzes] = useState([])
	useEffect(() => {
		async function fetchQuizzes() {
			const params = queryString.parse(window.location.search.replace(/^\?/, ''))
			const response = await axios('http://localhost:3000/quizzes', {
        headers: {
          token: localStorage.token
        }
      })
	  		setQuizzes(response.data)
		}
		fetchQuizzes()
	}, []);
	return (
		<div>
			<h1>Take a Quiz</h1>
			<p>Click on any quiz listed below to take one.</p>
			<ListGroup>
				{quizzes.map(q => (
					<ListGroup.Item>
						<Link to={'/quizzes/' + q.id}>{q.name}</Link>
					</ListGroup.Item>
				))}
			</ListGroup>
		</div>
	)
}

export default Home