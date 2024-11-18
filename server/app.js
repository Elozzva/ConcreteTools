'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
let api = require('./routes/api');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');
     next();
 });
 app.use('/api', api);
 
 
 module.exports = app;
