const { userRepository } = require('../../dal/repositories'); 

const createUser = async (req, res) => {
    const data = req.body; 
    const userCreated = await userRepository.createUser(data); 
    return res.status(201).send({
        data: userCreated
    })
}

const getAll = async (req, res) => {
    const users = await userRepository.getAll(); 
    return res.send({
        data:users
    }); 
}

const get = async (req, res) => {
    const { id } = req.params;
    const user = await userRepository.get(id); 
    return res.send({
        data: user
    });  
}

const deleteUser = async (req, res) => {
    const { id } = req.params; 
    const userDeleted = await userRepository.deleteUser(id);
    return res.send({
        data: userDeleted
    })
}

const updateUser = async (req, res) => {
    const data = req.body; 
    const userUpdated = await userRepository.updateUser(data); 
    return res.send({
        data: userUpdated
    })
}

const userController = {
    createUser, 
    getAll,
    get,
    deleteUser,
    updateUser
}

module.exports = userController; 