const Customer = require("../model/user");
const User = require("../model/user")
const jwt = require('jsonwebtoken')
const axios = require('axios')

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
				const token = jwt.sign({_id:find._id}, 'id_key_account', {expiresIn: '1d' })
				const {_id,name,email} = find;
				res.status(200).json({token,user:{_id,name,email}})
			  }else{
				let users = new User({name,email,type: "customer",type_account:"Google"})
				 await users.save(async (err, data) => {
				  if (err){
					return res.status(400).json({error:"Something went worng..."})
				  }
				  const token = jwt.sign({_id:data._id}, 'id_key_account', {expiresIn: '1d' })
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
			const Auth = await axios({
			  method: 'get',
			  url: `https://graph.facebook.com/v2.11/${req.body.user.userId}/?fields=id,name,email&access_token=${result.access_token}`
			})
			if(Auth){
				let find = await User.findOne({email})
                if(find){
					const token = jwt.sign({_id:find._id}, 'id_key_account', {expiresIn: '1d' })
					const {_id,name,email} = find;
					res.status(200).json({token,user:{_id,name,email}})
				}else{
					let users = new User({name:Auth.data.name,email,type: "customer",type_account:"Facebook"})
					await users.save(async (err, information) => {
						if (err){
						  return res.status(400).json({error:"Something went worng..."})
						}
						const token = jwt.sign({_id:information._id}, 'id_key_account', {expiresIn: '1d' })
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

};




		 
				