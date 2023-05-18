const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    apellidoP: String,
    apellidoM: String,
    username: String,
    password: String,
    email: String,
    fechaN: String,
    role_id: String,
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

module.exports = User;