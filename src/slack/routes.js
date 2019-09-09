'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');

const expectedQuoteObject = {
  id: 1,
  quote: 'This is so inpiring.',
  author: 'me'
};

router.post('/slack/testcommand', (request, response) => {
  slackbot.sendMessage('command-testing', 'Hooray, it worked!');
  response.status(200).send();
});

router.post('/slack/echo', (request, response) => {
  const channelName = request.body.channel_name; 
  slackbot.sendMessage(channelName, request.body.text);
  response.status(200).send();
});


router.post('/slack/inspireme', (request, response) => {
  const channelName = request.body.channel_name;
  slackbot.sendMessage(channelName, expectedQuoteObject.quote);
  response.status(200).send();
});

router.post('/slack/inspirehelp', (request, response) => {
  
});

router.post('/slack/inspirecreate', (request, response) => {
  
});

router.post('/slack/inspireupdate', (request, response) => {
  // const text = request.body.text;

});

router.post('/slack/inspiredelete', (request, response) => {
  
});

router.post('/slack/inspiremoreplease', (request, response) => {
  
});

router.post('/slack/inspireadmin', (request, response) => {
  
});

router.post('/slack/inspiresave', (request, response) => {
  
});

module.exports = router;