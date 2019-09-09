'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');

router.post('/slack/testcommand', (request, response) => {
  slackbot.sendMessage('command-testing', 'Hooray, it worked!');
  response.status(200).send();
});

router.post('/slack/echo', (request, response) => {
  slackbot.sendMessage('command-testing', request.body.text);
  response.status(200).send();
});

module.exports = router;