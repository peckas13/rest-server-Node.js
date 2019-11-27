require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//parse application/x-www-from-urlencoded
app.use(bodyParser.urlencoded({ extend: false }));

//parse formato a application/json
app.use(bodyParser.json());
//archivo agrupador de indices
app.use(require('./routes/index'));
//conector a la db
mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err, resp) => {
        if (err) throw err;

        console.log('base de datos online');
    });
//puerto que escucha 
app.listen(process.env.PORT);