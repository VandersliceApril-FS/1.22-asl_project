var express = require('express')
var router = express.Router()
let quizzes = require('../models/quizzes')

// routes should be around quizzes entity
router.get('/', (req, res) => {
    res.json(quizzes)
})

router.post('/', (req, res) => {
    res.send("Quizzes#Create")
})

router.get('/:id', (req, res) => {
    res.send("Quizzes#Show")
})

router.post('/:id', (req, res) => {
    res.send("Quizzes#Update")
})

router.delete('/:id', (req, res) => {
    res.send("Quizzes#Delete")
})
module.exports = router