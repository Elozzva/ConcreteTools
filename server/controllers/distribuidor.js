'use strict'

let Distribuidor = require('../models/distribuidor');

const index = (req, res) => {
    Distribuidor.find({}).exec( (err, distribuidores) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Distribuidores'});
        } else {
            //console.log(distribuidores);
            if (!distribuidores) {
                res.status(404).send({message: 'No se encontro ningun distribuidor'});
            } else {
                res.status(200).send({Distribuidores: distribuidores});
            }
        }
    })
}

const show = (req, res) => {
    const distribuidorId = req.params.id;
    //(distribuidorId);
    Distribuidor.findById(distribuidorId, (err, distribuidor) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Distribuidor ${distribuidorId}`});            
        } else {
            //console.log(distribuidor);
            if (!distribuidor) {
                res.status(404).send({message: 'No se encontro el distribuidor'});
            } else {
                res.status(200).send({Distribuidor: distribuidor});
            }
        }
    });
}

const save = (req, res) => {

    let distribuidor = new Distribuidor();

    const params = req.body;

    distribuidor.Nombre = params.Nombre;
    distribuidor.Clave = params.Clave;
    distribuidor.Telefono = params.Telefono;
    distribuidor.email = params.email;
    distribuidor.Direccion = params.Direccion;
    distribuidor.Estado = params.Estado;
    distribuidor.Region = params.Region;


    distribuidor.save( (err, distribuidorStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar Distribuidor ${params.nombre}`});            
        } else {
            res.status(200).send({Distribuidor: distribuidorStored});
        }
    })
}

const update = (req, res) => {
    const distribuidorId = req.params.id;
    let update = req.body;
    delete update._id;

    Distribuidor.findOneAndUpdate( distribuidorId, update, (err, distribuidorUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar distribuidor ${distribuidorId}`}); 
        } else {
            res.status(200).send( distribuidorUpdated );
        }
    })

}

const deleteDist = (req, res) => {
    var distribuidorId = req.params.id;

    Distribuidor.findById(distribuidorId, (err, distribuidor) => {
        if (err) {
            res.status(500).send({ message: ['Error al devolver el distribuidor'], error: true });
        } else {
            if (!distribuidor) {
                res.status(404).send({ message: ['No existe el distribuidor'], error: true });
            } else {
                distribuidor.remove(err => {
                    if(err){
                        res.status(500).send({message: ['El distribuidor no ha podido ser eliminado'], error: true });
                    } else {
                        res.status(200).send({message: ['El distribuidor ha sido eliminado exitosamente'], error: false });
                    }
                 });
            }
        }
    });
 }

module.exports = { index, show, save, update, deleteDist }

/* const buscarNorte = async () => {
    const post = await Distribuidor.find({
        Region:'NORTE'
    })
    console.log('***** Resultados de Norte *****', post);
}

buscarNorte()

const buscarCentro = async () => {
    const post = await Distribuidor.find({
        Region:'CENTRO'
    })
    console.log('***** Resultados de Centro *****', post);
}

buscarCentro()

const buscarSur = async () => {
    const post = await Distribuidor.find({
        Region:'SUR'
    })
    console.log('***** Resultados de Sur *****', post);
}

buscarSur() */