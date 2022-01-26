const express = require('express')
const questionCtlr = express.Router()
const { Question, Quiz } = require('../models')

questionCtlr.get('/', async (req, res) => {
    const questions = await Question.findAll({
        include: Quiz
    })
    res.json(questions)
})

questionCtlr.post('/', async (req, res) => {
    const question = await Question.create( req.body )
    let quiz = await Quiz.findAll()
    quiz = quiz.shift()
    quiz.addQuestion(question)
    // question.addQuiz(quiz)
    res.json(question)
})

questionCtlr.get('/:id', async (req, res) => {
    const question = await Question.findByPk( Number(req.params.id), {
        include: Quiz
    })
    res.json(question.Quiz)
})

questionCtlr.post('/:id', async (req, res) => {
    let question = await Question.update( req.body, {
        where: { id: Number(req.params.id) }
    })
    // instructor repo included another definition of question, but the initil one, Question.update() makes more sense here
    // const question = await Question.findByPk(Number(req.params.id))
    res.json(question)
})

questionCtlr.delete('/:id', async (req, res) => {
    const deleted = await Question.destroy({
        where: { id: Number(req.params.id) }
    })
    res.json(deleted)
    
})
module.exports = questionCtlr