const express = require('express')
const router = express.Router()
let questions = require('../models/questions')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
    res.json(questions)
})

router.post('/', (req, res) => {
    const { id, question } = req.body

    questions.push({
        id: Number(id),
        question
    })
    res.json(questions)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const question = questions.find(question => question.id == id)
    res.json(question)
})

router.post('/:id', (req, res) => {
    const id = Number(req.params.id)
    questions.map((q) => {
        if(id === q.id) {
            q.question = req.body.question
        }
        return q
    })
    res.json(questions)
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    questions = questions.filter(q => q.id !== id)
    res.json(questions)
})
module.exports = router

// post form data with curl:
// curl -X POST --data "id=4&question=How do you spell dog?" http://localhost:3000/questions
// curl -X POST --data "id=5&question=How do you spell cat?" http://localhost:3000/questions

// update existing quiz data with id
// curl -X POST --data "id=5&question=How do you spell cat?" http://localhost:3000/questions/3

// delete using curl
// curl -X DELETE http://localhost:3000/questions/3