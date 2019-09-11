'use strict';

const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
  user_id: { type:String, required: true },
  // TODO: User readible content_id (auto-increment, unique)
  // content_id: { type:String, required: true, unique:true },
  content: { type: String, required: true },
  type: { type: String },
});

module.exports = mongoose.model('contentSchema', contentSchema);
