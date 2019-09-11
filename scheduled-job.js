'use strict';

const slackBot = require('./src/slack/api.js');

const channelName = 'bot-testing';

function sendScheduledInspiration() {
    slackBot.sendMessage(channelName, 'BE INSPIRED REGULARLY!!!!')
    console.log('scheduled inspiration triggered');
}
sendScheduledInspiration();