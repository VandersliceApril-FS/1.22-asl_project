const { response } = require('express')
const express = require('express')
const router = express.Router()
const request = require('request')
const querystring = require('querystring')

router.get('/login', (req, res) => {
    res.render('auth/login')
})

router.get('/callback', async (req, res) => {
    const { code } = req.query
    // console.log('code', code)
    await request({
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: "0bb5026e643acb2bfbf1",
            client_secret: "96aa0c8ffa5b5e3f572306db55744a3a270673ca",
            code
        }
    }, async (error, response, body) => {
        // console.log(body)
        const { access_token } = querystring.parse(body)
        req.session.access_token = access_token
        res.redirect('/')
    })
})

module.exports = router