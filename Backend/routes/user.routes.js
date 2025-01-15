const express = require ('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controllers';)





router.post('/register',[
    body('email').isEmail().withMessage('Invaild Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name conatain 3 character'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character')
],
userController.registerUser;
)





module.exports = router;