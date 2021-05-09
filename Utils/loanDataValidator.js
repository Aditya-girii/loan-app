// This file contains all the request objects validators Joi schemas.

const Joi = require('joi');

module.exports = {

	// Loan req data validator schema.
	validatorLone:Joi.object().keys({
	loanType: Joi.string().required(),	// 3-Months, 6-Months, 12-Months
	amount: Joi.string().required(),
	customerId: Joi.string().required(),
	payment_mode:Joi.string().required(), // Week, Month, Year
	release_date:Joi.date().required(),
	}),
	// Loan data list validator schema.
	loan_dataValidators: Joi.object().keys({
		loanType: Joi.string().required(),	// 3-Months, 6-Months, 12-Months
		amount: Joi.string().required(),
		payment_mode:Joi.string().required(), // Week, Month, Year
		customerId:Joi.string().min(24).optional(),
		release_date:Joi.string()
	}),
    // Loan data updation validator schema.
	reqDataValidator:Joi.object().keys({
		loanId: Joi.string().optional().min(24),
		customerId: Joi.string().required(),
		loanType: Joi.string().optional(),
		amount: Joi.string().required(),
		payment_mode:Joi.string().optional(), // Week, Month, Year
	    release_date:Joi.date().optional(),
	}),
    // Loan Deletion data validator schema.
	deleteDataValidator:Joi.object().keys({
		customerId: Joi.string().required().min(24),
	})

}
