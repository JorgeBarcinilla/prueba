const Funcion = require('../models/funcion');
const Movie = require('../models/movie');
const funcionCtrl = {};

funcionCtrl.getFuncions = async (req, res) => {
    const funcions = await Funcion.find();
    console.log(funcions);
    res.json(funcions);
}

funcionCtrl.createFuncion = async (req, res) => {
    console.log(req.body);
    const {movie, dateMovie, quotaMovie,  siteMovie, addressMovie} = req.body;
    const movieName = movie;
    const objMovie = await Movie.findOne({movieName});
    console.log(objMovie.movieName);
    const funcion = new Funcion({'movie':objMovie.id , dateMovie, quotaMovie,  siteMovie, addressMovie});
    await funcion.save();
    res.json({message: 'Funcion publicada'});
}

funcionCtrl.updateFuncion =  async (req, res) => {
    const {movie, dateMovie, quotaMovie,  siteMovie, addressMovie} = req.body;
    const objMovie = Movie.findOne({movie});
    const newFuncion = {'movie':objMovie.id , dateMovie, quotaMovie,  siteMovie, addressMovie};
    await Funcion.findByIdAndUpdate(req.params.idFuncion, newFuncion);
    res.json({status: 'Funcion actualizada'});
}

funcionCtrl.deleteFuncion = async (req, res) => {
    await Funcion.findByIdAndRemove(req.body.idFuncion);
    res.json({status: 'Funcion eliminada'});
}


module.exports = funcionCtrl;

