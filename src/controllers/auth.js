const { response } = require('express')
const express = require('express')
const router = express.Router()
const request = require('request') // create curl request to another server from nodejs
const querystring = require('querystring')

router.get('/login', (req, res) => {
    // render a form/page to link to github
    res.render('auth/login')
})

router.get('/callback', async (req, res) => {
    // query parameter to extract code
    const { code } = req.query
    console.log('code', code)
    await request({
        // use code, clientid, client secret to generate a json web token to use to query information about user.
        // necessary parameters about the request
        uri: 'https://github.com/login/oauth/access_token',
        qs: {
            client_id: "0bb5026e643acb2bfbf1",
            client_secret: "96aa0c8ffa5b5e3f572306db55744a3a270673ca",
            code
        }
    }, async (error, response, body) => {
        console.log(body)
        // body comes in form of query parameters, convert query paramters into an object we can  use
        const { access_token } = querystring.parse(body)
        // can use access token to hit github user endpoint or curl
        await request({
            uri: 'https://api.github.com/user', 
            headers: {
                'Authorization': `token ${access_token}`,
                'User-Agent': 'Mozilla/5.0'
            }
        }, async (error, response, body) => {
            const data = querystring.parse(body)
            res.json(data)
        })
    })
})

module.exports = router