const Book = require("../model/item")
const axios = require('axios')
module.exports = {
	getBook: async (req, res, next) => {
		try {
			
			const i = await axios.get('https://6102d7aa79ed680017482359.mockapi.io/productdetail')
			res.status(200).json(i.data);
		} catch (error) {
	
		}
	},

};
