const express = require('express'); 
const { transactionController } = require('../controllers'); 
const transactionRouter = express.Router(); 

transactionRouter.get('/', transactionController.getAll); 
transactionRouter.get('/:id', transactionController.get); 
transactionRouter.post('/', transactionController.createTransaction); 
transactionRouter.delete('/:id', transactionController.deleteTransaction); 
transactionRouter.patch('/',transactionController.updateTransaction); 


module.exports = transactionRouter; 
