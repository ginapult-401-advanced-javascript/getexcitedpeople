'use strict';

const slackBot = require('./src/slack/api.js');
const inspirationLibrary = require('./src/content/inspiration-library.js');
const generateScheduleInspiration = inspirationLibrary.generateScheduleInspiration;

const channelName = 'inspirations';

function sendScheduledInspiration() {
  console.log('Heroku log: Scheduled inspiration triggered');
  return generateScheduleInspiration()
    .then(inspiration => {
      const message = `${inspiration._id} ${inspiration.content}`;
      console.log('Forwarding to bot');
      return slackBot.sendMessage(channelName, message);
    })
    .catch(console.error);
}
sendScheduledInspiration();