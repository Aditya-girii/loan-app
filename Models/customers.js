// This file define the customer schema and export the model.

const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

	firstName: {type: String},
	lastName: {type: String},
	age: {type: Number},
	gender: {type: String,unique:true},//, enum: ["male", "female", "others"]},
	address: {type: String},
	mobile_num: {type: String},
	email: {type: String,unique:true},
	occupation: {type: String}

});

const customers = mongoose.model('customers', customerSchema);
module.exports = customers;