const Book = require("../model/item")
module.exports = {
	getBook: async (req, res, next) => {
		try {
			res.status(200).json(await Book.find());
		} catch (error) {
	
		}
	},

};
