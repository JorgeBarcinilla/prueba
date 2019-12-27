const express = require('express');
const router = express.Router();
const passport = require('passport');
const {createMovie, getMovies} = require('../controllers/movie.controller');

router.get('/', getMovies);

router.post('/create', createMovie);


module.exports = router;