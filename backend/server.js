const express = require('express')
const app = express()
const port = 3000

const userRoutes = require('./routes/user');

app.use(express.json());

// Permet en configurant les headers, de communiquer entre l'application du FrontEnd avec celle du BackEnd
// Pour permettre des requêtes cross-origin (et empêcher des erreurs CORS), des headers spécifiques de contrôle d'accès doivent être précisés pour tous les objets de réponse.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/api/auth', userRoutes);


