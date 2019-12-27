const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {getFuncions, updateFuncion, createFuncion, deleteFuncion} = require('../controllers/funcion.controller');
const passportJWT = passport.authenticate('jwt',{session: false});
const passportSignIn = passport.authenticate('local',{session: false});

//Todos las funciones
router.get('/', getFuncions);

//Crea una funcion
router.route('/create')
    .post(passportJWT,createFuncion);

//Actualiza una funcion
router.put('/update/:idfuncion', updateFuncion);

//Elimina una funcion
router.delete('/delete/:idFuncion', deleteFuncion);


module.exports = router;