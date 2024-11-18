'use strict'
require('dotenv').config({path:__dirname+'/.env'});

let mongoose = require('mongoose');
let app = require('./app');
const PORT = process.env.PORT || 3678;
const URL_DB = process.env.DB_CLOUD_URL || '';


mongoose.connect(URL_DB, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexion a BD exitosa');
        app.listen(PORT, () => {
            console.log('API COncretetools servida en http://localhost:'+PORT);
        })
    }
})