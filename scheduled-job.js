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
    slackBot.sendMessage(channelName, 'BE INSPIRED REGULARLY!!!!')
    console.log('scheduled inspiration triggered');
}
sendScheduledInspiration();