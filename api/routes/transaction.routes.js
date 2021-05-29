const express = require('express'); 
const { transactionController } = require('../controllers'); 
const transactionRouter = express.Router(); 

transactionRouter.get('/', transactionController.getAll); 
transactionRouter.post('/', transactionController.createTransaction); 


module.exports = transactionRouter; 
