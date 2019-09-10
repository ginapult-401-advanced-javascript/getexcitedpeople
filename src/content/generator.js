'use strict';

function generatedContent(contents, userId){
  let count = contents.length; 
  let randomId = Math.floor((Math.random()* count) + 1);
  console.log(randomId);
  let result = {};
  contents.forEach(content => {
    if(content.content_id === randomId){
      result = `${content.content}`;
      // console.log('this is the content:', content);
    }
  });
  return result;
}

const library = require('./content-library');

module.exports = {getInspiration: userId => generatedContent((library))};
