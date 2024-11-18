'use strict'

let Producto = require('../models/producto');

const index = async (req, res) => {
    await Producto.find({}, null, {sort: {Orden: -1}}, function (err, productos) {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Productos'});
        }
        //console.log(productos);
        if (!productos) {
            res.status(404).send({message: 'No se encontro ningun producto'});
        } else {
            res.status(200).send({Productos: productos.sort((a, b) => a.Orden - b.Orden)});
        }
    }).clone().catch(function(err){ console.log(err)});
    /* await Producto.find({}).exec( (err, productos) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Productos'});
        } else {
            //console.log(productos);
            if (!productos) {
                res.status(404).send({message: 'No se encontro ningun producto'});
            } else {
                res.status(200).send({Productos: productos.sort((a, b) => a.Orden - b.Orden)});
            }
        }
    }) */
}

const show = (req, res) => {
    const productoId = req.params.id;
    Producto.findById(productoId, (err, producto) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Producto ${productoId}`});            
        } else {
            if (!producto) {
                res.status(404).send({message: 'No se encontro el producto'});
            } else {
                res.status(200).send({Producto: producto});
            }
        }
    });
}

const save = (req, res) => {

    let producto = new Producto();
    const params = req.body;

    producto.Orden = params.Orden;
    producto.Nombre = params.Nombre;
    producto.Clave = params.Clave;
    producto.Descripcion = params.Descripcion;
    producto.Precio = params.Precio;
    producto.Aplicaciones = params.Aplicaciones;
    producto.Imagen = params.file;
    //console.log(producto);
    producto.save( (err, productoStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar Producto ${params.nombre}`});            
        } else {
            res.status(200).send({Producto: productoStored});
        }
    })
}

const update = (req, res) => {
    const filter = { _id: req.params.id };
    let update = req.body;

    update.Precio = Number(update.Precio);
    Producto.findOneAndUpdate( filter, update, (err, productoUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar Producto ${productoId}`}); 
        } else {
            res.status(200).send( productoUpdated );
        }
    })

}

const deleteProducto = (req, res) => {
    var productoId = req.params.id;

    Producto.findById(productoId, (err, producto) => {
        if (err) {
            res.status(500).send({ message: ['Error al devolver el producto'], error: true });
        } else {
            if (!producto) {
                res.status(404).send({ message: ['No existe el producto'], error: true });
            } else {
                producto.remove(err => {
                    if(err){
                        res.status(500).send({message: ['El producto no ha podido ser eliminado'], error: true });
                    } else {
                        res.status(200).send({message: ['El prodcuto ha sido eliminado exitosamente'], error: false });
                    }
                 });
            }
        }
    });
 }

module.exports = { index, show, save, update, deleteProducto }