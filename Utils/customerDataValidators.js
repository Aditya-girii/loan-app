// This file contains all the request objects validators Joi schemas.

const Joi = require('joi');

module.exports = {

	// Customer registration req data validator schema.
	customer_reg: Joi.object().keys({
		firstName: Joi.string().required().min(3).max(5),
		lastName: Joi.string().required().label("please enter last Name"),
		age: Joi.string().optional(),
		gender: Joi.string().required().valid("male", "female", "others"),
		address: Joi.string().optional(),
		mobile_num: Joi.string().optional(),
		email: Joi.string().required(),
		occupation: Joi.string().required()
	}),
    // Customer list data validator schema.
	dataValidators : Joi.object().keys({
		customerId:Joi.string().min(24).optional()
	}),
	// Customer updation data validator schema.
	reqDataValidator:Joi.object().keys({
		customerId: Joi.string().required().min(24),
		occupation: Joi.string().optional(),
		age:Joi.number().min(18).optional(),
		address:Joi.string().optional(),
		mobile_num:Joi.string().optional(),
	}),
	// Customer Deletion data validator schema.
	deleteDataValidator:Joi.object().keys({
		customerId: Joi.string().required().min(24),
	})


}
