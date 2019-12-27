const Movie = require('../models/movie');
const movieCtrl = {};

movieCtrl.getMovies = async (req, res) => {
    const movies = await Movie.find();
    console.log(movies);
    res.json(movies);
}

movieCtrl.createMovie = async (req, res) => {
    console.log(req.body);
    console.log(req.user);
    const {movieName, directorMovie, genderMovie,  descrMovie} = req.body;
    const movie = new Movie({movieName, directorMovie, genderMovie,  descrMovie});
    await movie.save();
    res.json({message: 'Pelicula guardada'});
}


module.exports = movieCtrl;