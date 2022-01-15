const express = require('express')
const router = express.Router()
const { Choice } = require('../models')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const choices = await Choice.findAll()
    res.render('choice/index', { choices })
})
router.get('/new', (req, res) => {
    res.render('choice/create')
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const choice = await Choice.create({ name })
    res.redirect('/choices/' + choice.id)
})

router.get('/:id', async (req, res) => {
    const choice = await Choice.findByPk(req.params.id)
    res.render('choice/show', { choice })
})

router.get('/:id/edit', async (req, res) => {
    const choice = await Choice.findByPk(req.params.id)
    res.render('choice/edit', { choice })
})

router.post('/:id', async (req, res) => {
    const { name } = req.body
    const { id } = req.params
    const choice = await Choice.update({ name }, {
        where: { id }
    })
    res.redirect('/choices/' + id)
})

router.get('/:id/delete', async (req, res) => {
    const { id } = req.params
    const deleted = await Choice.destroy({
        where: { id }
    })
    res.redirect('/choices')
})

module.exports = router