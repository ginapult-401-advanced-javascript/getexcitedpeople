'use strict';

const slackbot = require('../../../src/slack/api.js');

describe('Testing Slack API Requests', () => {

  test('successfully get a channel id by given the channel name', () => {
    return slackbot.getChannelId('inspirations')
      .then(id=>{
        expect(id).toEqual('CNB46Q7CP');
      });
  });

  test('fail get a channel id by given the non-existent channel name', () => {
    return slackbot.getChannelId('hello')
      .catch(err=>{
        expect(err).toBeDefined();
      });
  });
});
