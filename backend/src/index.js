require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/calculator', require('./routes/calculator'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {/* Conectado a MongoDB */})
  .catch(err => console.error('Error conectando a MongoDB:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  /* Servidor corriendo */
});