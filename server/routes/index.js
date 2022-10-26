var express = require('express');
var router = express.Router();

const {newUser,getUsers,getUser,updateUser,deleteUser} = require('../controllers/user.controllers')
/* get all users (R) */
router.get('/',getUsers);

// add new user (C)
router.post('/add',newUser);

// get user and update
router.get('/:id',getUser);
router.put('/:id/Update',updateUser);

// delete user
router.delete('/:id',deleteUser)
module.exports = router;
