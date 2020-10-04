//Including Express Framework Library
const express = require('express');
//Include https instead of http since we have the certificates to encrypt our connection
//const https = require('https');
const https = require('http');
//Create an instance of Express
const app = express();
//Create our secure server
//const server = https.createServer({key: key, cert: cert }, app);
const server = https.createServer(app);

bodyParser = require('body-parser'),
    router = require("../config/router").router // Précise qu'on veut l'objet router


//Body parser configuration
app.use(bodyParser.urlencoded({ extended: false })); // l'on précise que nous allons forcer le parse des objets inclus dans l'autre
app.use(bodyParser.json()); // On va parser du JSON

app.use('/api/', router);

//Init Port to 3535
const port = 3535;

//Mettre le serveur en écoute sur le port 3535
server.listen(port, function() {
    console.log("Hello c'est moi le serveur, j'écoute actuellement sur le port ", port)
});