const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

// Rutas
const userRoutes = require('./routes/users');

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  if (db.readyState === 1) {
    next();
  } else {
    res.status(500).send('Error al conectar con la base de datos');
  }
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200']
}));

// Rutas middleware
app.use('/users', userRoutes);

// Inicio del servidor
app.listen(3000, () => console.log('Servidor iniciado en el puerto http://localhost:3000'));
