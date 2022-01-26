const express = require('express')
const choiceRouter = express.Router()
const { Choice, Question } = require('../models')

choiceRouter.get('/', async (req, res) => {
    const choices = await Choice.findAll({
        include: Question
    })
    if(req.headers.accept.indexOf('/json') > -1) {
        res.json(choices)
    } else {
        res.render('xchoices/index', { choices })
    }
    
})

choiceRouter.post('/', async (req, res) => {
    const choice = await Choice.create( req.body )
    res.json(choice)
})

choiceRouter.get('/:id', async (req, res) => {
    const choice = await Choice.findByPk(Number(req.params.id), {
        include: Question
    })
    res.json(choice.Quiz)  
})

choiceRouter.post('/:id', async (req, res) => {
    let choice = await Choice.update(req.body, {
        where: { id: Number(req.params.id) }
    })
    // let choice = await Choice.findByPk( Number(req.params.id))
    res.json(choice)
})

choiceRouter.delete('/:id', async (req, res) => {
    const deleted = await Choice.destroy({
        where: { id: Number(req.params.id) }
    })
    res.json(deleted)
})

module.exports = choiceRouter