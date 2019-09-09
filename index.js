'use strict';

require('dotenv').config();

const superagent = require('superagent');

const TOKEN = process.env.ACCESS_TOKEN;

const library = require('./quotes/index.js');

const generateQuotes = require('./quotes/generator.js');

const CONVERSATIONS_LIST_URL = `https://slack.com/api/conversations.list?token=${TOKEN}`;
const CHAT_POST_MESSAGE_URL = `https://slack.com/api/chat.postMessage`;

const TARGET_CHANNEL = 'bot-testing';

let generatedQuotes = generateQuotes(library);

const MESSAGE = generatedQuotes || 'Get excited, people!';

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
    .send({ "channel": channelId, "text": message })
    .set('Content-type', 'application/json')
    .set('Authorization', `Bearer ${TOKEN}`);
};

getChannelId(TARGET_CHANNEL)
  .then(channelId => postMessageToChannel(channelId, MESSAGE))
  .catch(console.error);
