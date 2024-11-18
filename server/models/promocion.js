

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PromocionSchema = Schema({
    Tipo:        String,
    Producto:    String,
    Inicio:      String,
    Fin:         String,
    Precio:      Number
});

module.exports = mongoose.model('Promocion',PromocionSchema, 'Promociones');