const mongoose = require ('mongoose');

const captainSchema = new mongoose.Schema ({
    fullname: {
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name length atleast 3 character long']
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name length atleast 3 character long']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
    status:{
        type: String,
        enum: ['active','inactive'],
        default: active
    },
    vehicle:{
        color:{
            type: String,
            required: true,
            minlength: [3, 'color length atleast 3 character long']
        },
        plate:{
            type: String,
            required: true,
            minlength: [3, 'plate length atleast 3 character long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity Must be atleast 1']
        }
    }

})