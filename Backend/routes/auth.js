const router = require("express").Router()
const axios = require('axios')
const {register} = require("../controller/auth.controller");

router.post('/register',register)


  
module.exports = router
