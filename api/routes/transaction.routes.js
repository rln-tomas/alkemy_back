const express = require('express'); 
const { transactionController } = require('../controllers'); 
const verifyJWT = require('../middlewares/verifyToken'); 
const transactionRouter = express.Router(); 

transactionRouter.get('/', verifyJWT, transactionController.getAll); 
transactionRouter.get('/:id', verifyJWT, transactionController.get); 
transactionRouter.post('/', verifyJWT, transactionController.createTransaction); 
transactionRouter.delete('/:id', verifyJWT, transactionController.deleteTransaction); 
transactionRouter.patch('/', verifyJWT,transactionController.updateTransaction); 


module.exports = transactionRouter; 
