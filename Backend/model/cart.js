const mongoose = require("../config/database");
const Schema = mongoose.Schema

const order = new Schema({
    Customer_id: String,
    products:[
        {
          _id: String,
          name:String,
          price: Number,
          quantity: Number,
          imageUrl:String,
          subtotal:Number,
        }
      ],
      total:Number,   
})
const Order = mongoose.model("orders", order)

module.exports = Order