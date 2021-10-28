const router = require("express").Router()
const {AddToCart,GetCart,DeleteProduct,GetCartById,Checkout,ChangeQuantity} = require("../controller/user.controller");

router.post('/addToCart',AddToCart)
router.get('/GetCart',GetCart)
router.post('/GetCartById',GetCartById)
router.post('/DeleteProduct',DeleteProduct)
router.post('/Checkout',Checkout)
router.put('/ChangeQuantity',ChangeQuantity)

module.exports = router
