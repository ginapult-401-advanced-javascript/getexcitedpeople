'use strict';

const supertest = require('supertest');

const app = require('../../../src/app.js').server;
const slackbot = require('../../../src/slack/api.js');

const mockRequest = supertest(app);

const TOKEN = process.env.ACCESS_TOKEN;

const CONVERSATIONS_LIST_URL = `https://slack.com/api/conversations.list?token=${TOKEN}`;
const CHAT_POST_MESSAGE_URL = `https://slack.com/api/chat.postMessage`;


describe('Testing Slack API Requests', () => {

  test('', () => {
    //
  });

});
