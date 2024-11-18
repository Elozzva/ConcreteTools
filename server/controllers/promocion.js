'use strict'

let Promocion = require('../models/promocion');

const index = (req, res) => {
    Promocion.find({}).exec( (err, promociones) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Promociones'});
        } else {
            //console.log(promociones);
            if (!promociones) {
                res.status(404).send({message: 'No se encontro ningun promoción'});
            } else {
                promociones.filter(p => {
                    p.Inicio = new Date(p.Inicio ).getTime();
                    p.Fin = new Date(p.Fin ).getTime();
                });
                res.status(200).send({Promociones: promociones});
            }
        }
    })
}

const show = (req, res) => {
    const promocionId = req.params.id;
    //console.log(promocionId);
    Promocion.findById(promocionId, (err, promocion) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Promoción ${promocionId}`});            
        } else {
            if (!promocion) {
                res.status(404).send({message: 'No se encontro la promoción'});
            } else {
                res.status(200).send({Promocion: promocion});
            }
        }
    });
}

const save = (req, res) => {

    let promocion = new Promocion();
    
    const params = req.body;

    promocion.Nombre = params.Nombre;
    promocion.Clave = params.Clave;
    promocion.Descripcion = params.Descripcion;
    promocion.Inicio = params.Inicio;
    promocion.Fin = params.Fin;
    promocion.Imagen = params.Imagen;

    promocion.save( (err, promocionStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar la Promoción ${params.nombre}`});            
        } else {
            res.status(200).send({Promocion: promocionStored});
        }
    })
}

const update = (req, res) => {
    const promocionId = req.params.id;
    const update = req.body;

    Promocion.findOneAndUpdate( promocionId, update, (err, promocionUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar la Promoción ${promocionId}`}); 
        } else {
            res.status(200).send( promocionUpdated );
        }
    })

}

const deletePromocion = (req, res) => {
    var promocionId = req.params.id;

    promocion.findById(promocionId, (err, promocion) => {
        if (err) {
            res.status(500).send({ message: ['Error al devolver la promoción'], error: true });
        } else {
            if (!promocion) {
                res.status(404).send({ message: ['No existe la promoción'], error: true });
            } else {
                promocion.remove(err => {
                    if(err){
                        res.status(500).send({message: ['La promoción no ha podido ser eliminada'], error: true });
                    } else {
                        res.status(200).send({message: ['La promoción ha sido eliminada exitosamente'], error: false });
                    }
                 });
            }
        }
    });
}

module.exports = { index, show, save, update }