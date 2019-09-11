'use strict';

const slackBot = require('./src/slack/api.js');
const inspirationLibrary = require('./src/content/inspiration-library.js');
const generateScheduleInspiration = inspirationLibrary.generateScheduleInspiration;

const channelName = 'bot-testing';

function sendScheduledInspiration() {
    generateScheduleInspiration()
      .then(inspiration => slackBot.sendMessage(channelName, inspiration))
      .catch(console.error);
    console.log('Heroku log: Scheduled inspiration triggered');
}
sendScheduledInspiration();