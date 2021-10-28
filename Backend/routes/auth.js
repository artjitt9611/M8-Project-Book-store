const router = require("express").Router()
const axios = require('axios')
const {Google,Facebook, register,login} = require("../controller/auth.controller");
router.post('/login',login)
router.post('/register',register)
router.post('/signin/facebook',Facebook)
router.post('/signin/google',Google)
  


  
module.exports = router
