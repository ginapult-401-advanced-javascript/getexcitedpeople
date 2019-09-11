'use strict';

const mongoose = require('mongoose');

require('dotenv').config();

const app = require('./src/app.js');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false})
  .then(() => console.log('Connected to database, yo!'))
  .catch(console.error);

app.start(process.env.PORT || 3000);
