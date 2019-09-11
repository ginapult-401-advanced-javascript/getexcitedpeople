'use strict';

const slackBot = require('./src/slack/api.js');
const inspirationLibrary = require('./src/content/inspiration-library.js');
const superagent = require('superagent');

const channelName = 'inspirations';

function sendScheduledInspiration() {
  return superagent.post('https://get-excited-people.herokuapp.com/slack/inspire-scheduled')
    .then (response => {
      console.log(response.status);
    })
    .catch(console.error);
}

sendScheduledInspiration();