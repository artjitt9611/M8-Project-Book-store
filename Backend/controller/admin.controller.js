const Book = require("../model/item")
const axios = require('axios')
module.exports = {
	getBook: async (req, res, next) => {
		try {
			
			const i = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Thailand')
			res.status(200).json(i.data);
		} catch (error) {
	
		}
	},

};
