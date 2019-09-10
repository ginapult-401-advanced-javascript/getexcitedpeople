'use strict';

let quotesLibrary = require('../src/quotes/data.js');
let generatedQuotes = require('../src/quotes/generator.js');

describe('can it randomly generate a new number/quote each time it is called', () => {
  test('can generate a random quote', () => {
    expect(generatedQuotes(quotesLibrary)).toHaveReturned();
    }
  )
});

//TODO: RUN TEST! 

