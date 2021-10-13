const mongoose = require("../config/database");
const Schema = mongoose.Schema;

const Books = require("../src/book.json");

const book = new Schema({
	name: String,
	description: String,
	price: Number,
	quantity: Number,
	imageUrl: String,
	type: String,
	author: String,
	status: String
});

const Book = mongoose.model("books", book);



module.exports = Book;
