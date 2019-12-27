const mongoose = require('mongoose');
const { Schema } = mongoose;

const FuncionSchema = new Schema({
    dateMovie: {type: String, required: true},
    movie: {type: Schema.ObjectId, ref: "Movie"},
    siteMovie: {type: String, required: true},
    addressMovie: {type: String, required: true},
    quotaMovie:{type: String, required: true}
});

module.exports = mongoose.model('Funcion', FuncionSchema);

 