const baseRepository = require('./base.repository'); 
const entity = 'User'; 

const createUser = async (data) => {
    const userCreated = await baseRepository.create(entity,data); 
    return userCreated; 
}

const userRepository = {
    createUser
}

module.exports = userRepository; 