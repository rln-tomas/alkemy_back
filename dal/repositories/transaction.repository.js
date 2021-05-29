const baseRepository = require('./base.repository'); 

const entity = 'Transaction'; 

const getTransactions = async () => {
        const transactions = await baseRepository.getAll(entity); 
        return transactions; 
}

const createTransaction = async (data) => {
    const transactionCreated = await baseRepository.create(entity, data); 
    return transactionCreated; 
}

const transactionRepository = {
    getTransactions, 
    createTransaction
}

module.exports = transactionRepository; 