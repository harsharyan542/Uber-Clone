const captainModel = require('../models/captain.model');


module.exports.createCaptain = async({fullname, email, password, vehicle, color, plate, capacity, vehicleType}) =>{
    if(!fullname || !email || !password || !vehicle || !color || !plate || !capacity || !vehicleType){
         throw new Error('All Field requires')
    }

    const captain = captainModel.create({
        fullname:{
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
}
 