'use strict';

const slackBot = require('./src/slack/api.js');
const Inspiration = require('./src/models/inspiration/inspiration.js');
const inspiration = new Inspiration();

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