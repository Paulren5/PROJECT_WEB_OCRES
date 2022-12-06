//packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
//definition du port de l'api
const PORT = process.env.PORT || 8082;

//chemin pour accéder aux routes
const routes = require('./routes/routeNeige');

//connexion a la BDD
mongoose.connect("mongodb://0.0.0.0:27017/Neige", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//verification de connexion et affichage du resultat de connexion
mongoose.connection.on('connected', () => {
    console.log('Mongoose est connecte');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/', routes);
app.listen(PORT, console.log(`le serveur demarre sur le port ${PORT}`));