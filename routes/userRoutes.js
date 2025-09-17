const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/', userController.createUser);     // Create
router.get('/', userController.getUsers);        // Read all
router.get('/:id', userController.getUser);      // Read one
router.put('/:id', userController.updateUser);   // Update
router.delete('/:id', userController.deleteUser);// Delete

module.exports = router;
//post https://0318ab05abce.ngrok-free.app/api/users Create
//get https://0318ab05abce.ngrok-free.app/api/users Read all
//get https://0318ab05abce.ngrok-free.app/api/users/:id Read one
//put https://0318ab05abce.ngrok-free.app/api/users/:id Update
//delete https://0318ab05abce.ngrok-free.app/api/users/:id Delete