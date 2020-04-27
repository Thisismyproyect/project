'use strict'
 
var Municipio = require('../models/municipio');
var Categoria = require('../models/categoria');


function registrarMunicipio(req, res){
    var params = req.body;

    if(params.nombre){
        var municipio = new Municipio();
        municipio.nombre = params.nombre;
        municipio.icono = null;

        municipio.save((err, municipioStored) => {
            if(err){ 
                return res.status(500).send({
                message: '17 - Error al guardar el municipio'
                });
            }

            if(municipioStored){
                return res.status(200).send({
                    municipio: municipioStored
                });
            } else {
                return res.status(404).send({
                    message: '27 - No se ha registrado el municipio'
                });
            }
        });
    } else {
        res.status(200).send({
            message: 'Envia todos los campos necesarios'
        });
    }
}

function registrarCategoriaMunicipio(req, res){
    var params = req.body;

    if(params.nombre){
        var categoria = new Categoria();
        categoria.nombre = params.nombre;

        categoria.save((err, categoriaStored) => {
            if(err){ 
                return res.status(500).send({
                message: '49 - Error al guardar el categoria'
                });
            }

            if(categoriaStored){
                return res.status(200).send({
                    categoria: categoriaStored
                });
            } else {
                return res.status(404).send({
                    message: '59 - No se ha registrado el categoria'
                });
            }
        });
    } else {
        res.status(200).send({
            message: 'Envia todos los campos necesarios'
        });
    }
}

function obtenerMunicipios(req, res){
    Municipio.find((err, municipios) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!municipios) return res.status(404).send({message: 'El municipios no existe'});
        
        return res.status(200).send({municipios: municipios});
    });
}

function obtenerCategorias(req, res){
    Categoria.find((err, categorias) => {
        if(err) return res.status(500).send({message: 'Error en la petición'});

        if(!categorias) return res.status(404).send({message: 'El categorias no existe'});
        
        return res.status(200).send({categorias: categorias});
    });
}


module.exports = {
    registrarMunicipio,
    registrarCategoriaMunicipio,
    obtenerMunicipios,
    obtenerCategorias
}