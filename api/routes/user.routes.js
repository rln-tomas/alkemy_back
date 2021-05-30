const express = require('express');
const router = express.Router();

const { userController } = require('../controllers')

/* GET users listing. */

router.get('/', userController.getAll);
router.post('/login', userController.login); 
router.get('/:id', userController.get); 
router.post('/', userController.createUser); 
router.delete('/:id', userController.deleteUser);
router.patch('/', userController.updateUser); 


module.exports = router;
