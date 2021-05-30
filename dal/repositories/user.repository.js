const baseRepository = require('./base.repository'); 
const entity = 'User'; 

const getAll = async () => {
    const users = await baseRepository.getAll(entity); 
    return users; 
}
const get = async (id) => {
    const user = await baseRepository.get(entity, id); 
    return user; 
}

const getByUsername = async (username) => {
    const user = await baseRepository.getByUsername(entity, username); 
    return user; 
}


const createUser = async (data) => {
    const userCreated = await baseRepository.create(entity,data); 
    return userCreated; 
}

const deleteUser = async (id) => {
    const userDeleted = await baseRepository.destroy(entity, id); 
    return userDeleted; 
}

const updateUser = async (data) => {
    const userUpdated = await baseRepository.update(entity, data); 
    return userUpdated; 
}

const userRepository = {
    createUser,
    getAll,
    get,
    getByUsername,
    deleteUser,
    updateUser
}

module.exports = userRepository; 