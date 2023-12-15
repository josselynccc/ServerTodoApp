const mongoose = require('mongoose')

const TaskScheme = new mongoose.Schema({
    label: {
        type: String
    },
    color: {
        type: String
    },
    list: {
        type: Array
    }
},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = mongoose.model('task', TaskScheme)