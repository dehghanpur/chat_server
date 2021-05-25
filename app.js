const path = require('path');
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require("express-rate-limit");
const helmet = require('helmet');
const xss = require("xss-clean");
const hpp = require("hpp");


const router = require('./routes/route.js');

const app = express();


app.use(bodyParser.json()); // application/json
app.use(cors());

//security
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
//security




app.use('/api',router);
//error handler
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message: message, data: data});
});
//database
mongoose
    .connect(
        process.env.DB
    )
    .then(result => {
        app.listen(8080);
    })
    .catch(err => console.log(err));
