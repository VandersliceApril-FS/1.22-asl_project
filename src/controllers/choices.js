const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
let choices = require('../models/choices')
const res = require('express/lib/response')


router.get('/', (req, res) => {
    res.json(choices)
})

router.post('/', (req, res) => {
    const {id, choice } = req.body

    choices.push({
        id: Number(id),
        choice 
    })
    res.json(choices)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const choice = choices.find(choice => choice.id == id)
    res.json(choice)
})

router.post('/:id', (req, res) => {
    const id = Number(req.params.id)
    choices.map(c => {
        if(id === c.id) {
            c.choice = req.body.choice
        }
        return c
    })
    res.json(choices)
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    choices = choices.filter(c => c.id !== id)
    res.json(choices)
})

module.exports = router

// curl -X POST --data "id=5&choice=cat" http://localhost:3000/choices
// curl -X POST --data "id=7&choice=dog" http://localhost:3000/choices/3
// curl -X DELETE http://localhost:3000/choices/3
