const router = require("express").Router()
const {addBook} = require("../controller/admin.controller");

router.get('/add',(req, res) => {
 res.send("path /admin/add")
})

module.exports = router
