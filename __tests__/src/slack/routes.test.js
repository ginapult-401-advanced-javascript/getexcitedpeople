'use strict';
const slackbot = require('../../../src/slack/api');
const server = require('../../../src/app.js').server;
const supergoose = require('../../supergoose.js');

const mockRequest = supergoose.server(server);

const inspirationLibrary = require('../../../src/content/inspiration-library.js');

beforeAll(() => {
  return supergoose.startDB();
});

afterAll(supergoose.stopDB);

describe('Slack Routes', () => {

  const testUserId = 'U29283754';
  const testContent = 'my-inspiring-quote';
  const updatedContent = 'you-are-doing-great';

  let inspirationId;

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
        console.log(response.text);
        const responseTokens = response.text.split(/\s+/);
        const respondId = responseTokens[0];
        expect(respondId).toEqual(`(${inspirationId})`);
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

  test('/slack/inspire-update endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-update')
      .send({ user_id: testUserId,  })
      .then(response => {
        expect(response.statusCode).toEqual(200);
      });
  });

  test('/slack/inspire-delete endpoint should respond with status 200', () => {

    return mockRequest
      .post('/slack/inspire-delete')
      .send({ testUserId })
      .then(response => {
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
