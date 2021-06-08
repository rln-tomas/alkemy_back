const { transactionRepository } = require('../../dal/repositories'); 


const getAll = async (req, res) => {
	const transactions = await transactionRepository.getTransactions(); 
	return res.send({
		data: transactions, 
	}); 
};

const get = async (req, res) => {
	const { id } = req.params; 
	const transaction = await transactionRepository.get(id); 
	return res.send({
		data: transaction,
	}); 

};

const createTransaction = async (req, res) => {
	const data = req.body; 
	const transactionCreated = await transactionRepository.createTransaction(data); 
	return res.send({
		data: transactionCreated
	}); 
};

const deleteTransaction = async (req, res) => {
	const { id } = req.params; 
	const transactionDeleted = await transactionRepository.deleteTransaction(id); 
	return res.send({
		data: transactionDeleted
	});
};

const updateTransaction = async (req, res) => {
	const data = req.body; 
	const transactionUpdated = await transactionRepository.updateTransaction(data); 
	return res.send({
		data: transactionUpdated
	});
};

const getByUserID = async (req, res) => {
	const { id } = req.session.user; 
	const toWhere = { UserId: id };
	const transactions = await transactionRepository.getAllByField(toWhere); 
	return res.send({
		data: transactions
	});
};

const transactionController = {
	getAll, 
	createTransaction,
	get,
	deleteTransaction,
	updateTransaction,
	getByUserID
};

module.exports = transactionController; 