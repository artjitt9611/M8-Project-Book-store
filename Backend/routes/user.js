const router = require("express").Router()
const {AddToCart,GetCart} = require("../controller/user.controller");

router.post('/addToCart',AddToCart)
router.get('/GetCart',GetCart)

module.exports = router
