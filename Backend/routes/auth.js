const router = require("express").Router()
const axios = require('axios')
const {Google,Facebook} = require("../controller/auth.controller");


router.post('/signin/facebook',Facebook)
router.post('/signin/google',Google)
  


  
module.exports = router
