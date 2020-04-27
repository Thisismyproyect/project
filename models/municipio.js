'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MunicipioSchema = Schema({
    icono: String,
    nombre: String
});

module.exports = mongoose.model('Municipio', MunicipioSchema);