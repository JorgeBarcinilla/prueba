const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const { Schema } = mongoose;

const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    rol:{type: String, required: true}
});

UserSchema.method('encryptPassword' , (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
});

UserSchema.method('validatePassword', function (password) {
    return bcrypt.compareSync(password, this.password);
});

module.exports = mongoose.model('User', UserSchema);
