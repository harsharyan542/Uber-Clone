const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const {validationResult} = require('express-validator');


module.exports.createCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password, vehicle} = req.body;

    const hashedPassword = await captainService.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType     
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token});
}