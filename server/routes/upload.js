const express = require('express');
const fileUpload = require('express-fileupload');
const uniqid = require('uniqid');
const path = require('path');
const fs = require('fs');
const app = express();

const Usuario = require('../models/usuario');
const Producto = require('../models/producto');

app.use(fileUpload());

app.put('/upload/:ruta/:id', (req, res) => {
    let id = req.params.id;
    let ruta = req.params.ruta;
    let archivo = req.files.archivo;
    //archivo unico y guardarlo con extension del archivo.name
    let nombre = uniqid() + path.extname(archivo.name);

    if (!req.files) {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'No se ha seleccionado ningun archivo'
            }
        });
    }
});

//RETORNA AL USUARIO CON ID
//ayuda a actualizar el nombre de la imagen en la bd //valida que la consulta este bien echa
function imagenUsuario(id, res, nombreImagen) {
    Usuario.findById(id, (err, usr) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        //validar la respuesta
        if (!usr) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no existe'
                }
            });
        }
        usr.img = nombreImagen;

        //Usuario.findByIdAndUpdate
        usr.save((err, usrDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.status(200).json({
                ok: true,
                usrDB
            });
        });
    });
}