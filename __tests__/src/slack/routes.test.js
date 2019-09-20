'use strict';
const slackbot = require('../../../src/slack/api');
const server = require('../../../src/app.js').server;
const supergoose = require('../../supergoose.js');

const mockRequest = supergoose.server(server);

// So server error logs don't output to the console during testing
console.log = jest.fn();

slackbot.sendMessage = jest.fn();

beforeAll(supergoose.startDB);

afterAll(supergoose.stopDB);

const testUserId = 'U29283754';
const testContent = 'my-inspiring-quote';
const updatedContent = 'you-are-doing-great';

let inspirationId;

describe('Slack Routes', () => {

  test('/slack/inspire-help endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-help')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-create endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-create')
      .send({user_id: testUserId, text: testContent})
      .then(response => {
        const responseTokens = response.text.split(/\s+/);
        inspirationId = responseTokens[1];
        const responseInspiration = responseTokens[responseTokens.length-1];
        expect(inspirationId).toBeDefined();
        expect(responseInspiration).toEqual(testContent);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-me endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-me')
      .send({ user_id: testUserId })
      .then(response => {
        // console.log(response.text);
        // const responseTokens = response.text.split(/\s+/);
        // const respondId = responseTokens[0];
        // expect(slackbot.sendMessage).toHaveBeenCalledWith(`(${inspirationId})\n${testContent}`);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-update endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-update')
      .send({ user_id: testUserId, text: `${inspirationId} ${updatedContent}`})
      .then(response => {
        const responseTokens = response.text.split(/\s+/);
        const responseId = responseTokens[1];
        const responseInspiration = responseTokens[responseTokens.length-1];
        expect(responseId).toEqual(inspirationId);
        expect(responseInspiration).toEqual(updatedContent);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-delete endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-delete')
      .send({ user_id: testUserId, text: inspirationId })
      .then(response => {
        const responseTokens = response.text.split(/\s+/);
        const responseInspiration = responseTokens[responseTokens.length-1];
        expect(responseInspiration).toEqual(updatedContent);
        expect(response.statusCode).toEqual(200);
      });
  });

});

describe('Test Server Error Response', () => {

  it('should respond with a 500 error on an unknown user id', () => {

    return mockRequest
      .post('/slack/inspire-me')
      .send({ user_id: 'jdakldafd' })
      .then(response => {
        expect(response.statusCode).toEqual(500);
      });

  });

  it('should respond with a 500 error if the user without permission try to update the content', () => {
    return mockRequest
      .post('/slack/inspire-update')
      .send({ user_id: 'wrongone', text: `${inspirationId} ${updatedContent}`})
      .catch(err=>{
        expect(err).toBeDefined();
      });
  });

});
