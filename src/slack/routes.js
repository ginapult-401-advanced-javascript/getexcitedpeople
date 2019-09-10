'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');


const quoteGenerator = require('../quotes/generator.js'); //imports the random content generator functionality
const userSchema = require('../models/auth/users-model.js'); //imports the userSchema/model 

const resourceServer = require('../quotes/generator.js');

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

  try {
    let query = {user_id: request.user_id};
    if (this.findOne(query)) {
      return (this.findOne(query));
    } else {
      let newUser = {
        user_id: request.user_id,
        user_role: user,
      };
      let user = new userSchema(newUser);
      user.save()
        .then(user => {
          response.user = user;
          return user; 
          // response.set('role', auth.role);
        });
    } 
  } catch(err) {
    console.error(`Error ${err}`);
  }
  // slackbot.sendMessage(channelName, expectedQuoteObject.text);
  // slackbot.sendMessage(channelName, expectedQuoteObject.img_url);
  slackbot.sendMessage(channelName, expectedQuoteObject.song_url);
  response.status(200).send();
});


router.post('/slack/inspirehelp', (request, response) => {
  
});

router.post('/slack/inspirecreate', (request, response) => {
  quoteGenerator(request.body);
  response.status(200).send();
});

router.post('/slack/inspireupdate', (request, response) => {
  // const text = request.body.text;

=======
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
