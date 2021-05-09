var  Joi=require('joi');

module.exports={

// Reypayment req data validator schema.
repayment_Data_Validation:Joi.object().keys({
    loanId: Joi.string().required(),	// 3-Months, 6-Months, 12-Months
	amount: Joi.number().required(),
	customerId:Joi.string().required(),	 
  }),

// Reypayment data list validator schema.
repayment_Data_List:Joi.object().keys({
    loanId: Joi.string().required(),	// 3-Months, 6-Months, 12-Months
	amount: Joi.number().required(),
	customerId:Joi.string().required(),
  }),

// Reypayment data updation validator schema.
  repayment_Data_Updation:Joi.object().keys({  
	amount: Joi.string().required(),
	customerId: Joi.string().required()
  }),

// Reypayment data Deletion validator schema.
  repayment_Data_deletion:Joi.object().keys({
	customerId: Joi.string().required()   
  })

}