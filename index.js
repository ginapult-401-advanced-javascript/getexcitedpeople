'use strict';

require('dotenv').config();
const app = require('./src/app.js');

app.start(process.env.PORT || 3000);



const TOKEN = process.env.ACCESS_TOKEN;
const library = require('./quotes/index.js');
const generateQuotes = require('./quotes/generator.js');
let generatedQuotes = generateQuotes(library);

const MESSAGE = generatedQuotes || 'Get excited, people!';