const router = require("express").Router()
const {AddToCart} = require("../controller/user.controller");

router.post('/addToCart',AddToCart)

module.exports = router
