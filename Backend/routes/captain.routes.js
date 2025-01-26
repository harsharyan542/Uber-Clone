const express = require ('express');
const router = express.Router();
const {body} = require ('express-validator');
const captainController = require ('../controllers/captain.controllers');


router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('First name length atleast 3 character long'),
    body('fullname.lastname').isLength({min:3}).withMessage('Last name length atleast 3 character long'),
    body('email').isEmail().withMessage('Please fill a valid email address'),
    body('password').isLength({min:6}).withMessage('Password length atleast 6 character long'),
    body('vehicle.color').isLength({min:3}).withMessage('color length atleast 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('plate length atleast 3 character long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity Must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Vehicle type must be car, bike or auto')
],captainController.registerCaptain);



module.exports = router;