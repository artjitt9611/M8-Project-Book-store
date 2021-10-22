const router = require("express").Router()
const axios = require('axios')
const {register, Google, Facebook} = require("../controller/auth.controller");

router.post('/register',register)
router.post('/signin/facebook',Facebook)
router.post('/signin/google',Google)
  


  
module.exports = router
