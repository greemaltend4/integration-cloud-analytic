const express = require('express');
const config = require('./config');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue dans Intégration Cloud Analytic!');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});