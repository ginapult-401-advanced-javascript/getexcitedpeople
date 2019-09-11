'use strict';

let contentLibrary = require('../src/content/data.js');
let generatedContent = require('../src/content/generator.js');

describe('can it randomly generate a new number/quote each time it is called', () => {
  test('can generate a random quote', () => {
    expect(generatedContent(contentLibrary)).toHaveReturned();
  }
  );
});

//TODO: RUN TEST! 

