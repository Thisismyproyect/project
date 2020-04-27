'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'my_new_app_ralph';

exports.createToken = function(usuario){
    var payload = {
            sub: usuario._id,
            restaurante: usuario.restaurante,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.correo,
            telefono: usuario.celular,
            imagen: usuario.imagen,
            domicilio: usuario.domicilio,
            municipio: usuario.municipio,
            rol: usuario.rol,
            status: usuario.status,
            iat: moment().unix(),
            exp: moment().add(360, 'days').unix
        };

    return jwt.encode(payload, secret);
};