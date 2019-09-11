'use strict';

const slackBot = require('./src/slack/api.js');

const channelName = 'bot-testing';

function generateScheduleInspiration() {
    return inspiration.get()
      .then(allContent => {
        const randomIndex = Math.floor(Math.random() * allContent.length);
        return allContent[randomIndex];
      })
      .catch(console.error);
};

function sendScheduledInspiration() {
    generateScheduleInspiration()
      .then(inspiration => slackBot.sendMessage(channelName, inspiration))
      .catch(console.error);
    console.log('Heroku log: Scheduled inspiration triggered');
}
sendScheduledInspiration();