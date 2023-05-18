const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const User = require("../models/userModel");

// Endpoint para obtener la colección de usuarios
router.get("/", UserController.getAllUsers);

// Obtener un usuario por ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    res.json(user);
    console.log("usuario encontrado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
    console.log("usuario creado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Actualizar un usuario existente
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
    console.log("usuario actualizado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un usuario existente
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(204).send();
    console.log("usuario borrado!");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
