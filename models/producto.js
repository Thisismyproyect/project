'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = Schema({
   restaurante: {type: Schema.ObjectId, ref: 'Restaurante'},
   nombre: String,
   descripcion: String,
   imagen: String,
   precio: Number,
   tiempoEntrega: Number,
   categoria: {type: Schema.ObjectId, ref: 'Categoria'},
   seccion: {type: Schema.ObjectId, ref: 'Restaurante'},
   status: String
});

module.exports = mongoose.model('Producto', ProductoSchema);