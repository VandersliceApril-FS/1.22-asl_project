const express = require('express')
const router = express.Router()
const { Question } = require('../models')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const questions = await Question.findAll()
    res.json(questions)
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const question = await Question.create({ name })
    res.json(question)
})

router.get('/:id', async (req, res) => {
    const question = await Question.findByPk(req.params.id)
    res.json(question)
})

router.post('/:id', async (req, res) => {
    const { name } = req.body
    const { id } = req.params
    const question = await Question.update({ name }, {
        where: { id }
    })
    res.json(question)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({
        where: { id }
    })
    res.redirect('/questions')
})
module.exports = router

// post form data with curl:
// curl -X POST --data "id=4&question=How do you spell dog?" http://localhost:3000/questions
// curl -X POST --data "id=5&question=How do you spell cat?" http://localhost:3000/questions

// update existing quiz data with id
// curl -X POST --data "id=5&question=How do you spell cat?" http://localhost:3000/questions/3

// delete using curl
// curl -X DELETE http://localhost:3000/questions/3