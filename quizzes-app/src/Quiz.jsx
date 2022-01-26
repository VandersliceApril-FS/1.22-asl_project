import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const styles = {
	quizTitle: {
		fontSize: '1.5rem'
	},
	question: {
		fontSize: '1.2rem'
	}
}

const Quiz = () => {
	const [quiz, setQuiz] = useState({Questions: []})
	const params = useParams()
	useEffect(() => {
		async function fetchQuiz() {
			const q = await axios(`http://localhost:3000/quizzes/${params.id}`, {
				headers: {
					token: localStorage.token
				}
			})
	  		setQuiz(q.data)
		}
		fetchQuiz()
	}, [params]);
	return (
		<Form id="quiz" style={{ height: "90%", width: '90%', overflow: "scroll" }}>
			<h3 style={styles.quizTitle}>Quiz: {quiz.name}</h3>
			<ListGroup>
				{quiz.Questions.map(q => (
					<ListGroup.Item>
						<h4 style={styles.question}>{q.question}</h4>
							<ListGroup>
							{q.Choices.map(c => (
								<ListGroup.Item>
									<Form.Check type="radio" name={'question_' + q.id}  label={c.label} required />
								</ListGroup.Item>		
							))}
							</ListGroup>
					</ListGroup.Item>
				))}
			</ListGroup>
			<Button href='/' className="mt-3" variant="dark" type="submit">Submit Quiz</Button>
		</Form>
	)
}

export default Quiz