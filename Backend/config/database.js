const mongoose = require("mongoose");

mongoose.connect(
	"mongodb://localhost/store",
	{ useNewUrlParser: true },
);

module.exports = mongoose
