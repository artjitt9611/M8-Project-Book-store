const mongoose = require("../config/database")
const Schema = mongoose.Schema

const receipt = new Schema({
    Order: Object,
    Address: Object
})

const Receipt = mongoose.model("receipts", receipt)

module.exports = Receipt