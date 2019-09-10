'use strict';

function generatedQuotes(quotes){
  //we need to generate a random id
  let randomId = Math.floor((Math.random()* 13) + 1);
  //then we need to match the id with the id of the quote in the quote library
  console.log(randomId);
  let result = {};
  quotes.forEach(quote => {
    if(quote.id === randomId){
      result = `${quote.quote}  -By ${quote.author}`;
      // console.log('this is the quote:', quote);
    }
  });
  return result;
}

const library = require('./data');

module.exports = {getInspiration: userId => generatedQuotes((library))};
