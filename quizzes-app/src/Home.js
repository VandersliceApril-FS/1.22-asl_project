import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import queryString from 'querystring'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
		<section>
			<h1>Take a Quiz</h1>
			<p>Click on any quiz listed below to take one.</p>
			<Row xs={1} sm={2} md={3} lg={4} className="g-3" >
					{quizzes.map(q => (
						<Col>
							<Link 
								to={'/quizzes/' + q.id}
								style={{
									textDecoration: "none",
									color: "black"
								}}
							>
								<Card style={{ maxWidth: '18rem', minHeight: '11rem'}}>
									<Card.Body>
									<Card.Title>
										{q.name}
									</Card.Title>
									<Card.Text style={{ fontSize: '80%' }}>
										This is information about the quiz that would ideally entered dynamically.
									</Card.Text>
									</Card.Body>
									<Card.Footer style={{ fontSize: '60%' }}>
										<small className="text-muted">Last Updated: {q.updatedAt}</small>
									</Card.Footer>
								</Card>
							</Link>
						</Col>
					))}
			</Row>
		</section>
	)
}

export default Home