'use strict'

let express = require('express');
let ProductoController = require('../controllers/producto');
let PromocionController = require('../controllers/promocion');
let DistribuidorController = require('../controllers/distribuidor');
let api = express.Router();

api.get('/productos', ProductoController.index);
api.get('/producto/:id', ProductoController.show);
api.post('/producto', ProductoController.save);
api.put('/productos/:id', ProductoController.update);
api.delete('/producto/:id', ProductoController.deleteProducto);

api.get('/promociones', PromocionController.index);
api.get('/promocion/:id', PromocionController.show);
api.post('/promocion', PromocionController.save);
api.put('/promociones/:id', PromocionController.update);

api.get('/distribuidores', DistribuidorController.index);
api.get('/distribuidor/:id', DistribuidorController.show);
api.post('/distribuidor', DistribuidorController.save);
api.put('/distribuidor/:id', DistribuidorController.update);
api.delete('/distribuidor/:id', DistribuidorController.deleteDist);

module.exports = api;
