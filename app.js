// Importez le module dotenv
require('dotenv').config();

// Récupérez les valeurs des variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affichez le message avec les valeurs des variables d'environnement
console.log(`I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}.`);

