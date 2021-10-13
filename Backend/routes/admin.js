const router = require("express").Router()
const {getBook} = require("../controller/admin.controller");

router.get('/getBook',getBook)

module.exports = router
