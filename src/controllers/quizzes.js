const express = require('express')
const router = express.Router()
let quizzes = require('../models/quizzes')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

// routes should be around quizzes entity
router.get('/', (req, res) => {
    res.json(quizzes)
})

router.post('/', (req, res) => {
    const { id, name } = req.body
    
    //get data from the request using req.body and body-parser
    quizzes.push({
        id: Number(id),
        name
    })
    res.json(quizzes)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    // grab quizzes then find quiz with that id
    const quiz = quizzes.find(quiz => quiz.id == id) //loop through quizzes then filter out based on true or false
    res.json(quiz)
})

router.post('/:id', (req, res) => {
    const id = Number(req.params.id)
    //map through and replace
    quizzes.map((q) => {
        if(id === q.id) {
            q.name = req.body.name
        }
        return q
    })
    res.json(quizzes)
})

router.delete('/:id', (req, res) => {
    res.send("Quizzes#Delete")
})
module.exports = router

// post form data with curl:
// curl -X POST --data "id=6&name=ASL Quiz 6" http://localhost:3000/quizzes

// update existing quiz data with id
// curl -X POST --data "id=3&name=ASL Test 3" http://localhost:3000/quizzes/3