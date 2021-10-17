const mongoose = require("../config/database");
const Schema = mongoose.Schema

const order = new Schema({
    userId:String,
    products:[
        {
          Book_id: String,
          Quantity: Number,
          price: Number
        }
      ],   
})
const Order = mongoose.model("orders", order)

module.exports = Order