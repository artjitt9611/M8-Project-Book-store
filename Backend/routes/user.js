const router = require("express").Router()
const {AddToCart,GetCart,DeleteProduct} = require("../controller/user.controller");

router.post('/addToCart',AddToCart)
router.get('/GetCart',GetCart)
router.delete('/DeleteProduct',DeleteProduct)

module.exports = router
