'use strict';

/**
  In general this file isn't production ready.
  I would recommend not commiting it until it's been refactored.
*/

function generatedContent(contents, userId){ // You define userId here and don't use it.
  let count = contents.length; // TODO: This variable should be renamed to something more descriptive and made into a const if it's not changed.  What is this variable used for?
  let randomId = Math.floor((Math.random()* count) + 1);
  console.log(randomId); // Generally you want to remove logs unless you are logging something important to your system administration.
  let result = {}; // TODO: You initialize this variable as an object but than change it to a string in the following code block.  One of these things
  contents.forEach(content => {
    if(content.content_id === randomId){
      result = `${content.content}`;
      // console.log('this is the content:', content); Jacob - no commented out code in master / production.
    }
  });
  return result;
}

const library = require('./content-library');  // TODO: Requires should be made at the top of the file.

module.exports = {getInspiration: userId => generatedContent((library))}; // TODO: This line is very strange.  The function you define has a parameter thar is never used. You are also just passing in a module you required above.  Please refactor.
