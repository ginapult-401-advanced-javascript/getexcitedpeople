'use strict';

const express = require('express');
const router = express.Router();

const slackbot = require('./api.js');

const quoteGenerator = require('../quotes/generator.js'); //imports the random content generator functionality
const userSchema = require('../models/auth/users-model.js'); //imports the userSchema/model 

const expectedQuoteObject = {
  id: 1,
  quote: 'Be inspired, friend! You are doing great!',
  author: 'me',
  img_url: 'https://previews.123rf.com/images/teploleta/teploleta1506/teploleta150600159/41724569-you-are-amazing-hand-drawn-calligraphic-inspiration-quote-on-a-watercolor-background-.jpg',
  song_url: 'https://soundcloud.com/officialbirdy/keeping-your-head-up-1',
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
  try {
    let query = {user_id: request.user_id};
    if (this.findOne(query)) {
      return (this.findOne(query));
    } else {
      let newUser = {
        user_id: request.user_id,
        user_role: user
      };
      let user = new userSchema(newUser);
      user.save()
        .then(user => {
          response.user = user;
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