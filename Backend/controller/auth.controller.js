const Customer = require("../model/user");


module.exports = {
	register: async (req, res, next) => {
		try {
			let { firstname, lastname, username, password, phone, email } =
			req.body;
		if (
			firstname == "" ||
			lastname == "" ||
			username == "" ||
			password == "" ||
			phone == "" ||
			email == ""
		) {
			res.status(400).json({
				status: "FAILED",
				message: "Empty inputs fields",
			});
		} else if (
			!/^[a-zA-Zก-๙]*$/.test(firstname) ||
			!/^[a-zA-Zก-๙]*$/.test(lastname)
		) {
			res.status(400).json({
				status: "FAILED",
				message: "Invalid firstname or lastname  entered",
			});
		} else if (password.length < 8) {
			res.status(400).json({
				status: "FAILED",
				message: "Password is short",
			});
		} else if (!/^[0][689]\d{8}/.test(phone)) {
			res.status(400).json({
				status: "FAILED",
				message: "tel incorrect",
			});
		} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			res.status(400).json({
				status: "FAILED",
				message: "Invalid email entered",
			});
		} else {
			let customers = new Customer({ ...req.body, type: "customer" });
			await customers.save(async (err, data) => {
				if (err)
				res
						.status(400)
						.json("Username that other User has already exist");
						res.status(200).json(data);
			});
		}
		} catch (error) {
	
		}
	},

};
