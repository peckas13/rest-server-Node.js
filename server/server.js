require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


//Parse application/x-www-form.uriencoded
app.use(bodyParser.urlencoded({ extend: false }));

//Parse formato a application/json
app.use(bodyParser.json());

//Archivo agrupador de rutas
app.use(require('./routes/index'));

//Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/cafeteria', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err, resp) => {
        if (err) throw err;

        console.log('base de datos online');
    });
app.listen(process.env.PORT);