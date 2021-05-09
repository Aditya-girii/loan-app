
# APPLICATION FOLDER STRUCTURE

README.md 	- mark down file to give the information about the application.

package.json- Index of the application.

server.js 	- Main file to initiate or start or run the application.

Routes 		- This flder defines APIs.In side this folder we have files (eg: user.js, loan.js), each 			   												 file carries respective APIs defination.
	
	- user.js: Defines all user APIs.
	- loan.js: Defines all loan APIs.


Controllers	- This folder defines APIs behind logic. In this folder we have files like (eg: user.js, 			   loan.js), each carries respective APIs behind logic. we called these functions in 																			 respective APIs in Rountes.
Models		- This folder defines the DataBase models and respective Schemas to store the data in 																							   DataBase.
Utils		- This folder is carries the common functions to use through out the applcation to reduce 				the code redundency. (eg: universalFunctions.js, logger.js, successMsgs.js, 						  errorMsgs.js)
			  NOTE:Scenerio Example:  If we want to send email to the user in multiple senerios in our application, we can create a sendEmail function in Utils/universalFunctions.js and where ever we want to send email, we can call sendEmail function.

node_modules- Holds all the installed npm modules.