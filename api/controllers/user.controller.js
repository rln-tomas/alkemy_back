const { userRepository } = require('../../dal/repositories'); 

const createUser = async (req, res) => {
    const data = req.body; 
    const userCreated = await userRepository.createUser(data); 
    return res.send({
        data: userCreated
    })
}

const userController = {
    createUser
}

module.exports = userController; 