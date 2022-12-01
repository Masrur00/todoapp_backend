const mongoose = require('mongoose');
const { connectionString } = require('../config/connection.mongo');

const todoTaskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    isDone: {
        type: Boolean,
        default: false
    },
     
},
    {
        timestamps: true,
        versionKey: false,
    }
)




module.exports = connectionString.model("todo", todoTaskSchema);

// module.exports = mongoose.model('TodoTask', todoTaskSchema);