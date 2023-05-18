const User = require('../models/userModel');

// Controlador para obtener la colección de usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener la colección de usuarios');
    }
};
