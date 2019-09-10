'use strict';
const Model = require('../Model.js');
const schema = require('./content-schema');

const library = require('./data');
/**
 * Class representing a Content Item.
 * @extends Model
 */
class Content extends Model {
  constructor() { super(schema); }

  generatedContent(contents, userId){
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
}
module.exports = Content;