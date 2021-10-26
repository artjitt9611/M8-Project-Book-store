
const express = require("express");
const app = express();
var cors = require('cors')
require('dotenv').config()

var omise = require('omise')({
    'publicKey': process.env.OMISE_PUBLIC_KEY,
    'secretKey':process.env.OMISE_SECRET_KEY,
})

const createCharge = async () => {

    const customer = await omise.customers.create({
        email:'john.don@example.com',
        description:'john Doe (id:30)',
        cards:'tokn_test_5pmo24otc0676fra9ck'
    })

    const charge = await omise.charges.create({
        amount: 100000, 
        currency: 'thb',
        customer:customer.id
 
    })
    console.log(charge)

   
}
createCharge()

const router = require("../routes")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

module.exports = app;
