const express = require('express')
const router = express.Router()
const { Quiz } = require('../models')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', async (req, res) => {
    const quizzes = await  Quiz.findAll()
    res.json(quizzes)
})

router.post('/', async (req, res) => {
    const { name } = req.body
    const quiz = await Quiz.create({ name })
    res.json(quiz)
})

router.get('/:id', async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id)
    res.json(quiz)
})

router.post('/:id', async (req, res) => {
    const { name } = req.body
    const { id } = req.params
    const quiz = await Quiz.update({ name }, {
        where: { id }
    })
    res.json(quiz)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deleted = await Quiz.destroy({ 
        where: { id }
    })
    res.redirect('/quizzes')
})
module.exports = router

// tests
// CREATE: curl -X POST --data "name=April's Quiz" http://localhost:3000/quizzes
// UPDATE: curl -X POST --data "name=April's Test" http://localhost:3000/quizzes/1
// DELETE: curl -X DELETE http://localhost:3000/quizzes/1
// Redirect Response: curl -I -X DELETE http://localhost:3000/quizzes/2

// npx sequelize-cli model:generate --name=Choice --attributes=name:string
// npx sequelize-cli model:generate --name=Question --attributes=name:string
//  npx sequelize-cli db:migrate

// CREATE: curl -X POST --data "name=What color is grass?" http://localhost:3000/questions
// UPDATE: curl -X POST --data "name=What color are strawberries" http://localhost:3000/questions/1
// DELETE: curl -X DELETE http://localhost:3000/questions

