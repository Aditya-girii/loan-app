// Main file to init the application.

// Require the express module.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = mongoose.connection;
console.log("console for db connection:",db);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
// require config routes
const addConfig = require("./config/addConfig");
const mangoConnect = require("./config/DBconfigue");

// require Customer routes.
const customerRoutes = require('./Routes/customer');
// Require loan routes.
const loanRoutes = require('./Routes/loan');
// Require repayment routes.
const rePaymentRoutes = require('./Routes/rePayment');
// Create the express Node app.
const app = express();

// parse application/json
app.use(bodyParser.json());

// Add customer routes to the application.
customerRoutes(app);
// Adding loan routes to the application.
loanRoutes(app);
//Adding rePayment rountes to the application.
rePaymentRoutes(app);
 
// Create the base route.
app.get('/', function (req, res) {
  res.send('Welcome To Instal Loan');
});
 
// Start the server.
app.listen(addConfig.port);
console.log(`App is running in the URL:${addConfig.port}`);

// DB connection.
// mongoose.connect(MongoDB_connection_String, Options_object, callback-function);
mongoose.connect(
	mangoConnect.mongooseConnect,
	mangoConnect.urlParser,
	function(err, res){
	if(err){
		console.log('\x1b[31m',"@ DB connection error: ", err);
	}else{
		console.log('\x1b[34m',"@ MongoDB connection established successfully.");
	}
});


