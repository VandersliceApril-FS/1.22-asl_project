const express = require('express')
const app = express()
const quizzesCtrl = require('./src/controllers/quizzes')


app.get('/', (request, response) => {
    response.send('Home Page GET')
})

//mount router at certain endpoint. 
app.use('/quizzes', quizzesCtrl)
// tell the app to listen to requests on a port
app.listen(3000)