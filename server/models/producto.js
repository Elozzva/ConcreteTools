

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const ProductoSchema = Schema({
    Nombre:         String,
    Clave:          String,
    Descripcion:    [String],
    Precio:         Number,
    Aplicaciones:   [String],
    Imagen:         String,
    Orden:          Number

});

module.exports = mongoose.model('Producto',ProductoSchema, 'Productos');
