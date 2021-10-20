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

      const a = await axios({
        method: 'get',
        url: `https://graph.facebook.com/me?access_token=${result.access_token}`
      })
      
      
      console.log('access'+a.data.name)
      let data = {name:a.data.name,token:result.access_token}
      res.status(200).json(data)
    
  
      
    } catch (error) {

    }
  })
  


  
module.exports = router
