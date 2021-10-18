const router = require("express").Router()
const axios = require('axios')
const {register} = require("../controller/auth.controller");

router.post('/register',register)

router.post('/signin/facebook', async (req, res) => {
    try {
      const response = await axios({
        method: 'get',
        url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=411525907158319
        &client_secret=78f757065b20692a8bc46a94312cc44b&fb_exchange_token=${req.body.user.accessToken}`
      })
      const result = response.data
      console.log(req.body.user)
      res.status(200).json(req.body.user)
      console.log('Result -->', result)
  
      
    } catch (error) {

    }
  })
  
module.exports = router
