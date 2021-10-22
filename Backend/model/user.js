const mongoose = require("../config/database");
const Schema = mongoose.Schema

const user = new Schema({
    email: {type: String , unique: true},
    name: String,
    type: String,
    type_account:String
})

const User = mongoose.model("users", user)

module.exports = User