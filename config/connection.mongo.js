const mongoose = require("mongoose");
const keys = require("./keys");
const env = process.env.NODE_ENV;
const conf = keys.mongodb[env];

let todo_connectionString;


const getConnectionString = (index) => {
    return `mongodb+srv://${conf[index].username}:${conf[index].password}@cluster0.psqx1fe.mongodb.net/?retryWrites=true&w=majority`
};

switch (env) {
    case "local":
        todo_connectionString = `mongodb://${conf.host}:${conf.port}/${conf.database}`;
        break;
    case "dev":        
        todo_connectionString = getConnectionString(0);
        break;
    case "staging":
    case "preprod":
    case "prod":
        todo_connectionString = getConnectionString(1);
        break;
}

var connectionString = mongoose.createConnection(todo_connectionString);

module.exports = { connectionString };



    

