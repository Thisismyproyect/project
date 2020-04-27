'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;

// Conexion a la DataBase
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ralph', {
                                                        useNewUrlParser: true,
                                                        useUnifiedTopology: true,
                                                        })
    .then(() => {
        console.log('Se concectó exitosamente a la base de datos Ralph');
    
        // Crear servidor
        app.listen(port, () => {
            console.log('Servidor corriendo');
        });
    })
    .catch(err => console.log(err));