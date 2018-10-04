/**
 * Start require libs
 */

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const config  = require('./config/config').get(process.env.NODE_ENV)
/**
 * End require libs
 */

 /** Start config */

mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE)

const app = express();
const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Server running on port",port)
})
app.use(bodyParser.json());
app.use(cookieParser())

/** End config */