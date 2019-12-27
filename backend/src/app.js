const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');

// Setting
app.set('port', process.env.PORT || 4000);
  

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'mySecretPass',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/api/movie', require('./routes/movie.routes'));
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/funcion', require('./routes/funcion.routes'));

module.exports = app;