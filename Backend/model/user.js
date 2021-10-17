const mongoose = require("../config/database");
const Schema = mongoose.Schema

const customer = new Schema({
    firstname: String,
    lastname: String,
    username:{type: String , unique: true},
    password: String,
    phone: String,
    email: String,
    type: String
})

const Customer = mongoose.model("customers", customer)

module.exports = Customer