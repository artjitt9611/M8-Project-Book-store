const router = require("express").Router()
const {getBook,ShowDetails,search} = require("../controller/admin.controller");

router.get('/getBook',getBook)
router.get("/show_detail/:id",ShowDetails);
router.get("/search/:keyword",search);

module.exports = router
