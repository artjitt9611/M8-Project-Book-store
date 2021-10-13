
const app = require("./config/express");

const listener = app.listen(5000, () => {
	console.log("Server is running on port " + listener.address().port);
});
