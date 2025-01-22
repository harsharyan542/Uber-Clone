const userModel = require('../models/user.model')

module.exports.createUser = async({firstname, lastname, email, password}) =>{
    if(!firstname || !lastname || !password){
         throw new Error('All Field requires')
    }

    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}