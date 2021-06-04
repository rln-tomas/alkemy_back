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

const get = async (id) => {
    const transaction = await baseRepository.get(entity,id); 
    return transaction; 
}

const deleteTransaction = async (id) => {
    const transactionDeleted = await baseRepository.destroy(entity, id); 
    return transactionDeleted; 
}

const updateTransaction = async (data) => {
    const transactionUpdated = await baseRepository.update(entity, data); 
    return transactionUpdated; 
}

const transactionRepository = {
    getTransactions, 
    createTransaction,
    get,
    deleteTransaction,
    updateTransaction
}

module.exports = transactionRepository; 