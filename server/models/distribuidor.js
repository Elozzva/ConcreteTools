
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const DistribuidorSchema = Schema({
    Clave:          String,
    Nombre:         String,
    Telefono:       String,
    email:          String,
    Direccion:      String,
    Estado:         String,
    Region:         String
});

module.exports = mongoose.model('Distribuidor',DistribuidorSchema, 'Distribuidores');