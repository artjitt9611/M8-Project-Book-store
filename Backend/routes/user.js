const router = require("express").Router()
const {AddToCart,GetCart,DeleteProduct,GetCartById} = require("../controller/user.controller");

router.post('/addToCart',AddToCart)
router.get('/GetCart',GetCart)
router.post('/GetCartById',GetCartById)
router.post('/DeleteProduct',DeleteProduct)

module.exports = router
