const { transactionRepository } = require('../../dal/repositories'); 


const getAll = async (req, res) => {
    const transactions = await transactionRepository.getTransactions(); 
    return res.send({
        data: transactions, 
    }); 
}

const createTransaction = async (req, res) => {
    const data = req.body; 
    const transactionCreated = await transactionRepository.createTransaction(data); 
    return res.send({
        data: transactionCreated
    }); 
}

const transactionController = {
    getAll, 
    createTransaction
}

module.exports = transactionController; 