const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const pageRouter = require('./src/controllers/page')
const quizRouter = require('./src/controllers/quiz')
const questionRouter = require('./src/controllers/question')
const choiceRouter = require('./src/controllers/choice')
const authRouter = require('./src/controllers/auth')
const cors = require('cors')
let session = require('express-session')
const isAuthenticated = require('./src/middlewares/auth')
app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/src/views')
app.set('view engine', 'twig')
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true,
    "allowCrossDomain": true
}))

app.use(bodyParser.urlencoded({ etended: false }))

app.use('/quizzes', isAuthenticated, quizRouter)
app.use('/questions', questionRouter)
app.use('/choices', choiceRouter)
app.use('/auth', authRouter)
app.use('/', pageRouter)

app.listen(3000)