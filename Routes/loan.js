
const loan_ctrl = require('../Controllers/loan');
const validator = require('../Utils/loanDataValidator');

module.exports = function(app){

	// Create a loan.
	app.post('/loan/create', function(req, res){

		console.log("Routes/loan: Inside '/loan/create' functionality.");
	
		const { error } = validator.validatorLone.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		loan_ctrl.createLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
		
	});

	// Get the loans list.
	app.get('/loan/list', function(req, res){

		const { error } = validator.loan_dataValidators.validate(req.body);
		if(error) return res.send(error.details[0].message);
		console.log("Routes/loan: Inside '/loan/list' functionality.");

		loan_ctrl.listLoan({}, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update a Loan record.
	app.put('/loan/update', function(req, res){

		console.log("Routes/loan: Inside '/loan/update' functionality.");

		const { error } = validator.reqDataValidator.validate(req.body);
		if(error) return res.send(error.details[0].message);
		
		loan_ctrl.updateLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	});

	// Delete Loan record from database.
	app.delete('/loan/delete', function(req, res){

		console.log("Routes/loan: Inside '/loan/delete' functionality.");

		loan_ctrl.deleteLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

};







