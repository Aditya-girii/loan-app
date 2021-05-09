
const rePayment_ctrl = require('../Controllers/rePayment');
const validator = require('../Utils/repaymentDataValidation');

module.exports = function(app){

	// Add a new repayment record.
	app.post('/repayment/add', function(req, res){

		console.log("Rountes/repayment: Inside '/repayment/add' functionality.");
		const { error } = validator.repayment_Data_Validation.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		rePayment_ctrl.add_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Get repayments lists.
	app.get('/repayment/list', function(req, res){

		console.log("Rountes/repayment: Inside '/repayment/lost' functionality.");
        const { error } = validator.repayment_Data_List.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		rePayment_ctrl.list_rePayment({}, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	//Update repayment record.
	app.put('/repayment/update', function(req, res){

		console.log("Routes/repayment: Inside '/repayment/update' functionality.");
		const { error } = validator.repayment_Data_Updation.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		rePayment_ctrl.update_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete repayment record.
	app.delete('/repayment/delete', function(req, res){

		console.log("Routes/repayment: Inside '/repayment/delete' functionality.");
        const { error } = validator.repayment_Data_deletion.validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
		rePayment_ctrl.delete_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

}










