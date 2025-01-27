const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const {validationResult} = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {fullname, email, password, vehicle} = req.body;

    //console.log('Incoming Request Body:', req.body);

    const isCaptainAlreadyExist = await captainModel.findOne({email});

    if (isCaptainAlreadyExist) {
        return res.status(400).json({errors: [{msg: 'Captain already exist'}]});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        fullname,
        email,
        password: hashedPassword,
        vehicle
    });

    const token = captain.generateAuthToken();

    res.status(201).json({token, captain});
}