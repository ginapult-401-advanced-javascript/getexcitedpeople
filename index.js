'use strict';

require('dotenv').config();
const app = require('./src/app.js');

app.start(process.env.PORT || 3000);
