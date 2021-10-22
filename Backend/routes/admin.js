const router = require("express").Router()
const {getBook,ShowDetails} = require("../controller/admin.controller");

router.get('/getBook',getBook)
router.get("/show_detail/:id",ShowDetails);

module.exports = router
