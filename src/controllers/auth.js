const express = require('express')
const authRouter = express.Router()
const axios = require('axios')
const queryString = require('querystring')
const { LoginToken } = require('../models/index')

const client_id = "0bb5026e643acb2bfbf1"
const client_secret = "96aa0c8ffa5b5e3f572306db55744a3a270673ca"

authRouter.get("/login", (req, res) => {
    res.render('auth/login')
})

authRouter.get('/callback', async (req, res) => {
    const { code } = req.query
    const response = await axios.post('https://github.com/login/oauth/access_token', {
        code, 
        client_id,
        client_secret
    })
    const { access_token } = queryString.parse(response.data)
    req.session.access_token = access_token
    const loginToken = await LoginToken.create({ token: access_token })
    res.redirect('http://localhost:3001?token=' + access_token)
})

authRouter.get('/token', async (req, res) => {
    const token = await LoginToken.findOne({where: {
        token: req.headers.token
    }})
    if (token) {
        req.session.access_token = req.headers.token
        res.json(token)
    } else {
        res.json({ token: false })
    }
})

module.exports = authRouter