'use sctrict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoritosSchema = Schema({
    usuario: {type: Schema.ObjectId, ref: 'Usuario'},
    producto: {type: Schema.ObjectId, ref: 'Producto'}
});

module.exports = mongoose.model('Favoritos', FavoritosSchema);