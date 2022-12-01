const express = require("express");
const cors = require('cors');
const versionRouter = require('./versions/v1/version.router');
const PORT = process.env.PORT || 8085;

const app = express();
app.use(express.json());
app.use(cors())
app.use('/api/',versionRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});