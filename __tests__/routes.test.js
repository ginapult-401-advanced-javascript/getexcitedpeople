'use strict';

const supergoose = require('cf-supergoose');
const mockRequest = supergoose.server(server);

describe('/inspireme starting route', () => {
  return mockRequest.post('/slack/inspireme')
  .then(results => {
    expect(results).toBeTruthy();
  })
});
