const Book = require("../model/item")
const Order = require("../model/order")

module.exports = {
	AddToCart: async (req, res, next) => {
		try {
            Book_id = req.body.Book_id;
		    Customer_id = req.body.Customer_id;
		    NewQuantity = req.body.quantity;
            let cart = await Order.findOne({ Customer_id }).catch((err) => {
				res.status(404).json("Not found!!");
			})

			let book = await Book.findById(Book_id).catch((err) => {
				res.status(404).json("Not found!!");
			});
			res.status(200).json(cart)
			
		} catch (error) {
	
		}
	},

};
