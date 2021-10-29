const Customer = require("../model/user");
const User = require("../model/user")
const UserLocal = require("../model/userlocal")
const jwt = require('jsonwebtoken')
const axios = require('axios')
const fs = require('fs')
const privateKey = fs.readFileSync(__dirname+'/../config/private.key')

module.exports = {
	Google:async (req, res, next) => {
		try {
			const {tokenId} = req.body
			const response = await axios({
			  method: 'post',
			  url: `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`
			})
			const {email_verified,name,email} = response.data
			if(email_verified){
			  let find = await User.findOne({email})
			  if(find){
				const token = jwt.sign({_id:find._id}, privateKey , {expiresIn: '1d' })
				const {_id,name,email} = find;
				res.status(200).json({token,user:{_id,name,email}})
			  }else{
				let users = new User({name,email,type: "customer",type_account:"Google"})
				 await users.save(async (err, data) => {
				  if (err){
					return res.status(400).json({error:"Something went worng..."})
				  }
				  const token = jwt.sign({_id:data._id}, privateKey , {expiresIn: '1d' })
				  const {_id,name,email} = users;
				  res.status(200).json({token,user:{_id,name,email}})
				});
			  }
			}else{
				res.status(400).json('not user')
	  
	  
			}
		  } catch (error) {
			res.status(500).json(error)
	  
		  }

	},
	Facebook:async (req, res, next) => {
		try {
			const email = req.body.user.email
			const response = await axios({
			  method: 'get',
			  url: `https://graph.facebook.com/v6.0/oauth/access_token?grant_type=fb_exchange_token&client_id=411525907158319
			  &client_secret=78f757065b20692a8bc46a94312cc44b&fb_exchange_token=${req.body.user.accessToken}`
			})
			const result = response.data
			const Authenticate = await axios({
			  method: 'get',
			  url: `https://graph.facebook.com/v2.11/${req.body.user.userId}/?fields=id,name,email&access_token=${result.access_token}`
			})
			if(Authenticate){
				let find = await User.findOne({email})
                if(find){
					const token = jwt.sign({_id:find._id}, privateKey , {expiresIn: '1d' })
					const {_id,name,email} = find;
					res.status(200).json({token,user:{_id,name,email}})
				}else{
					let users = new User({name:Authenticate.data.name,email,type: "customer",type_account:"Facebook"})
					await users.save(async (err, information) => {
						if (err){
						  return res.status(400).json({error:"error"})
						}
						const token = jwt.sign({_id:information._id}, privateKey, {expiresIn: '1d' })
						const {_id,name,email} = users;
						res.status(200).json({token,user:{_id,name,email}})
					  });
				}
			}else{
				res.status(400).json('not user')
			}

			
		  } catch (error) {
			res.status(500).json(error)
		  }
	},
	register: async (req, res,next) => {
		try{
			let {name, password,email} = req.body;
			if (email == "" ||name == "" ||password == "") {
				res.status(400).json({
					status: "FAILED",
					message: "Empty inputs fields",
				});
			} else if (password.length < 8) {
				res.status(400).json({
					status: "FAILED",
					message: "Password is short",
				});
			} 
			else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
				res.status(400).json({
					status: "FAILED",
					message: "Invalid email entered",
				});
			} else {
				let user = new UserLocal({ ...req.body, type: "customer", type_account:"local" });
				await user.save(async (err, data) => {
					if (err){
						res.status(400).json("Username that other User has already exist");
					}else{
						res.status(200).json(data);
					}
				});
			}

		}catch(err){
			res.status(500).json(error)
		}

	},
	login: async (req, res,next) => {
		try{
			const { email, password } = req.body;
			const data = await UserLocal.findOne({
				email,
				password,
			});
			if (data) {
				const {_id,name,email} = data
				const token = jwt.sign({_id:data._id}, privateKey , {expiresIn: '1d' })
				res.status(200).json({token,user:{_id,name,email}});
			} else {
				let message = { message: "Email or Password incorrect" };
				res.status(400).end(JSON.stringify(message));
			}
		}catch(err){
			res.status(500).json(error)
		}
		
		
	},
};






		 
				