'use strict';

const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  user_id: {type:String, required: true, unique:true },
  content: { type: String, required: true },
  type: {type: String, required: true },
});

contentSchema.statics.getInspiration = function (contents, userId) {
  let count = contents.length; 
  let randomId = Math.floor((Math.random()* count) + 1);
  let result = {};
  contents.forEach(content => {
    if(content.content_id === randomId){
      result = `${content.content}`;
    }
  });
  return result;
};






module.exports = mongoose.model('contentSchema', contentSchema);
