const express = require ('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controllers' );
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage('Invaild Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name conatain 3 character'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character')
],userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invaild Email'),
    body('password').isLength({min:6}).withMessage('Password must be 6 character')
],userController.loginUser);

router.get('/profile',authMiddleware.authUser,userController.getUserProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser)




module.exports = router;