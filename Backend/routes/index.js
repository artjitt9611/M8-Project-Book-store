const router = require("express").Router()

const admin = require("./admin")
const user = require("./user")
const auth = require("./auth")


router.use("/admin",admin)
router.use("/user",user)
router.use("/auth",auth)


module.exports = router
