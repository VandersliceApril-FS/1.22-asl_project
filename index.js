// load in the framework
const { response } = require('express')
const express = require('express')

// invoke an instance of express framework
const app = express()

// setup homepage route: GET / HTTP/1.1
// Catch this in express
app.get('/', (request, response) => {
    response.send('Home Page GET')
}) // pass path, callback

// to test this post route use curl in terminal
app.post('/', (request, response) => {
    response.send('Home Page POST' )
})

app.get('/products', (request, response) => {
    response.send('All products')
})

app.post('/products', (request, response) => {
    response.send('Created a new product.')
})

app.get('/products/:productId', (request, response) => {
    response.send('Updated a product with id ' + request.params.productId)
})

// Dynamic route data
// GET /products/nike-large-white-shoe HTTP/1.1
// : tells express what comes next is dynamic data
app.get('/products/:productName', (request, response) => {
    response.send('Product Page. Product name: ' + request.params.productName)
})


// tell the app to listen to requests on a port
app.listen(3000)