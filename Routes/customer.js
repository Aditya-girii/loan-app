// This file defines all customer routes.

const Joi = require('joi');
const custCntrls = require('../Controllers/customer');
const validator = require('../Utils/customerDataValidators');

module.exports = function(app){

	/*Express API creation format
	
		applicationObject.MethodName(API path, handler function);

		Handler function have two params.
		1. Request- It is having all the API request data.
		2. It have all the methods to send the response to this route.
	*/

	// Add customer route.
	app.post('/customer/add', function(req, res){

		console.log("Routes: Inside '/customer/add' API function.");

		const { error } = validator.customer_reg.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);

		custCntrls.addCustomer(req.body, (err, result) => res.send(err || result));

	});

	// Get customers List.
	app.get('/customer/list', function(req, res){

		const { error } = validator.dataValidators.validate(req.body);
		if(error) return res.send(error.details[0].message);

		custCntrls.listCustomers(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update customer data.
	app.put('/customer/update', function(req, res){	

		const { error } = validator.reqDataValidator.validate(req.body);
		if(error) return res.send(error.details[0].message);

		custCntrls.updateCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete customer document.
	app.delete('/customer/delete', function(req, res){
		// Delete customer record logic here.
		const { error } = validator.deleteDataValidator.validate(req.body);
		if(error) return res.send(error.details[0].message);

		custCntrls.deleteCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	})

};








