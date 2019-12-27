const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {signUp, signIn, home} = require('../controllers/user.controller');
const passportJWT = passport.authenticate('jwt',{session: false});
const passportSignIn = passport.authenticate('local',{session: false});

router.route('/home')
    .get(passportJWT, home);

//Logear un usuario
router.route('/signIn')
    .post(passportSignIn, signIn);
 
//Crear un usuario
router.route('/signUp')
    .post(signUp);


module.exports = router;