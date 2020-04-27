'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeccionSchema = Schema({
    restaurante: {type: Schema.ObjectId, ref: 'Restaurante'},
    nombre: String
});

module.exports = mongoose.model('Seccion', SeccionSchema);