const mongoose = require('mongoose');
const { connectionString } = require('../config/connection.mongo');

const todoTaskSchema = new mongoose.Schema({
    mobile: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: string,
        unique: true,
        required: true
    },
    program: {
        type: String,
        default: "Data Science"
    },
     
},
    {
        timestamps: true,
        versionKey: false,
    }
)




module.exports = connectionString.model("todo", todoTaskSchema);

// module.exports = mongoose.model('TodoTask', todoTaskSchema);