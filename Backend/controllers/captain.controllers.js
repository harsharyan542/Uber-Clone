const blacklistTokenModel = require('../models/blacklistToken.model');
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

module.exports.loginCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const {email, password} = req.body;

    const captain = await captainModel.findOne({email}).select('+password');

    if (!captain) {
        return res.status(400).json({errors: [{msg: 'Invalid password or email'}]}); 
    }

    const isEmailMatched = await captain.comparePassword(password);
    if(!isEmailMatched){
        return res.status(400).json({errors: [{msg: 'Invalid password or email'}]});
    }

    const token = captain.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req, res, next) => {  
    res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[ 1 ]);

    const blacklistedToken = await blacklistTokenModel.create({token});

    res.clearCookie('token');

    res.status(200).json({message: 'Logout successfully'});
}
