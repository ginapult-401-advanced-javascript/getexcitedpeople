'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');

const resourceServer = require('../quotes/generator.js');

const expectedInspirationQuote = {
  _id: 1,
  content: 'Be inspired, friend! You are doing great!',
  author: 'me',
  img_url: 'https://previews.123rf.com/images/teploleta/teploleta1506/teploleta150600159/41724569-you-are-amazing-hand-drawn-calligraphic-inspiration-quote-on-a-watercolor-background-.jpg',
  song_url: 'https://soundcloud.com/officialbirdy/keeping-your-head-up-1',
};

const expectedInspirationUrl = {
  _id: 2,
  user_id: 'U23583',
  content: 'https://soundcloud.com/officialbirdy/keeping-your-head-up-1',
};

router.post('/slack/ngrok', (request, response) => {
  response.status(200).send(request.body.channel_id);
});

router.post('/slack/echo', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  slackbot.sendMessage(channelName, request.body.text);
  response.status(200).send();
});

router.post('/slack/inspire-help', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  // TODO: /slack/inspire-help command
  response.status(200).send('Sending help!');
});

router.post('/slack/inspire-me', (request, response) => {
  const userId = request.body.user_id;
  const inspirationObject = resourceServer.getInspiration(userId);
  response.status(200).send(`${inspirationObject.content_id}: ${inspirationObject.content}`);
});

router.post('/slack/inspire-me-more', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  // TODO: /slack/inspire-me-more command
  response.status(200).send();
});

router.post('/slack/inspire-create', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  const newContent = request.body.text;
  const savedObject = resourceServer.createInspiration(userId, newContent);
  response.status(200).send(`Inspiration ${savedObject.content_id} has been saved!`);
});

router.post('/slack/inspire-update', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  const [inspirationId, newContent] = request.body.text.split(/\s+/);
  const updatedObject = resourceServer.updateInspiration(userId, inspirationId, newContent);
  response.status(200).send(`Inspiration ${updatedObject.content_id} updated!`);
});

router.post('/slack/inspire-delete', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  const inspirationId = request.body.text;
  const deletedObject = resourceServer.deleteInspiration(userId, inspirationId);
  response.status(200).send(`Inspiration ${deletedObject.content_id} deleted.`);
});

router.post('/slack/inspire-admin', (request, response) => {
  const channelName = request.body.channel_name;
  const userId = request.body.user_id;
  // TODO: Stretch Goal - /slack/inspire-admin command
  response.status(200).send();
});

module.exports = router;
