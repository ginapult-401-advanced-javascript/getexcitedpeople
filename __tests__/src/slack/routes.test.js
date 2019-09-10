'use strict';

const supertest = require('supertest');

const app = require('../../../src/app.js').server;
const slackbot = require('../../../src/slack/api');
const resourceServer = require('../../../src/quotes/generator.js');

const mockRequest = supertest(app);

slackbot.sendMessage = jest.fn();
resourceServer.getInspiration = jest.fn();
resourceServer.createInspiration = jest.fn();
resourceServer.updateInspiration = jest.fn();
resourceServer.deleteInspiration = jest.fn();

describe('Slack Routes', () => {

  const testUserId = 'U29283754';

  test('/slack/inspire-help endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-help')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-me endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-me')
      .send({ testUserId })
      .then(response => {
        expect(resourceServer.getInspiration).toHaveBeenCalledWith(testUserId);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-me-more endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-me-more')
      .send({ testUserId })
      .then(response => {
        // TODO: Stretch Goal - Test /slack/inspire-me-more command
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-create endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-create')
      .send({ testUserId })
      .then(response => {
        expect(resourceServer.createInspiration).toHaveBeenCalledWith(testUserId);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-update endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-update')
      .send({ testUserId })
      .then(response => {
        expect(resourceServer.updateInspiration).toHaveBeenCalledWith(testUserId);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-delete endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-delete')
      .send({ testUserId })
      .then(response => {
        expect(resourceServer.deleteInspiration).toHaveBeenCalledWith(testUserId);
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-admin endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-admin')
      .send({ testUserId })
      .then(response => {
        // TODO: Stretch Goal - Test /slack/inspire-admin command
        expect(response.statusCode).toEqual(200);
      });
  });

});
