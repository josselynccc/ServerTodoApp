const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    email: {
        type: String
    },

    password: { 
        type: String
    },
    nombre: { 
        type: String
    },
    apellido: { 
        type: String
    },
    edad: { 
        type: Number
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('users', UserScheme)