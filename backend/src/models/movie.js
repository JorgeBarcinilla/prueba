const mongoose = require('mongoose');
const { Schema } = mongoose;

const MovieSchema = new Schema({
    movieName: {type: String, required: true},
    directorMovie: {type: String, required: true},
    genderMovie: {type: String, required: true},
    descrMovie: {type: String, required: true}
});

module.exports = mongoose.model('Movie', MovieSchema);