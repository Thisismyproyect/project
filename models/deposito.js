'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepositoSchema = Schema({
    restaurante: {type: Schema.ObjectId, ref: 'Restaurante'},
    cantidad: Number,
    pasarela: String,
    fecha: String
});

module.exports = mongoose.model('Deposito', DepositoSchema);