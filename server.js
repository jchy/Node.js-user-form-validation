const express = require('express');
const connect = require('./src/config/db');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const User = require('./src/models/user.model');

const userRouter = require('./src/routes/user.route');
app.use(express.json());
app.use("/users",userRouter);

const start = async() => {
    await connect();
    app.listen(PORT, ()=>{
        console.log(`listening on port ${PORT}`);
    });
}

module.exports = start;