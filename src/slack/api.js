'use strict';

const superagent = require('superagent');

const TOKEN = process.env.ACCESS_TOKEN;

const CONVERSATIONS_LIST_URL = `https://slack.com/api/conversations.list?token=${TOKEN}`;
const CHAT_POST_MESSAGE_URL = `https://slack.com/api/chat.postMessage`;

/**
 * Returns the ID of the given channel.
 *
 * @param {string} channelName - The channel name
 * @returns {Promise<string>} The channel ID
 */
const getChannelId = channelName => {
  return superagent.get(CONVERSATIONS_LIST_URL)
    .set('Content-type', 'application/json')
    .then(response => {
      if (!response.body.ok) {
        throw Error(response.body.error);
      }

      const channels = response.body.channels;
      const target = channels.filter(channel => channel.name === channelName)[0];

      if(!target){
        throw Error('channel unknown');
      }

      return target.id;
    });
};

/**
 * Sends a message as the bot, into the selected channel.
 *
 * @param {string} channelId - The channel ID
 * @param {string} message - The message to send
 * @returns {Promise}
 */
const postMessageToChannel = (channelId, message) => {
  return superagent.post(CHAT_POST_MESSAGE_URL)
    .send({ 'channel': channelId, 'text': message })
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${TOKEN}`);
};

/**
 * Sends a message returned from postMessageToChannel as the bot, into selected channel.
 *
 * @param {string} channelName - The user-readable channel name - e.g. 'bot-testing'
 * @param {string} message - The message to send
 * @returns {Promise}
 */
const sendMessage = (channelName, message) => {
  return getChannelId(channelName)
    .then(channelId => postMessageToChannel(channelId, message))
    .catch(console.error);
};

module.exports = {getChannelId, sendMessage, postMessageToChannel};
