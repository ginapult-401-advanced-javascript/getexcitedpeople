'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');

const expectedQuoteObject = {
  id: 1,
  quote: 'Be inspired, friend! You are doing great!',
  author: 'me',
  img_url: 'https://previews.123rf.com/images/teploleta/teploleta1506/teploleta150600159/41724569-you-are-amazing-hand-drawn-calligraphic-inspiration-quote-on-a-watercolor-background-.jpg',
  video_url: 'https://www.youtube.com/watch?v=m8AXUq5uA0Y',
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
  // slackbot.sendMessage(channelName, expectedQuoteObject.text);
  // slackbot.sendMessage(channelName, expectedQuoteObject.img_url);
  slackbot.sendMessage(channelName, expectedQuoteObject.video_url);
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