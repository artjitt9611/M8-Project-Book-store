const Book = require("../model/item")
const axios = require('axios')
module.exports = {
	getBook: async (req, res, next) => {
		try {
			res.status(200).json(await Book.find());
		} catch (error) {
			res.status(500).json(error)
		}
	},
	ShowDetails: async (req, res, next) => {
		try{
			const { id } = req.params
			res.status(200).json(await Book.findById(id).catch((err) =>{
				if (err) res.status(400).json("Bad Request");
			}));
		}catch (error) {
			res.status(500).json(error)
		}
	},
	search: async (req, res,next) => {
		try{
			const { keyword } = req.params
			let data = await Book.find()
			let find = data.filter(p =>(p.name.includes(keyword)))
			res.status(200).json(find);
		}catch(error){
			res.status(500).json(error)
		}
        
    },

};
