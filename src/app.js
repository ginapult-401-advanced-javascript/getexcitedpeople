'use strict';

require('dotenv').config();

//3rd party resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const slackRoutes = require('./slack/routes.js');

//prepare the express app
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(slackRoutes); 

//error handling middlware
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

//catch all/error handling
app.use(notFound);
app.use(errorHandler);

//exporting server and start
module.exports = {
  server: app,
  /** start server on specified port
   * @param port {number} (defaults to process.env.PORT)
   */
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on ${port}`);
    })
  }
};
