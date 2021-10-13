const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost:27017/Store",
	{ useNewUrlParser: true },
);

module.exports = mongoose
