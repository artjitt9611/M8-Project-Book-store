const mongoose = require("../config/database");
const Schema = mongoose.Schema

const userLocal = new Schema({
    email:{type: String , unique: true},
    password: String,
    name:String,
    type: String,
    type_account:String
    
})

const UserLocal = mongoose.model("userLocal", userLocal)


module.exports = UserLocal