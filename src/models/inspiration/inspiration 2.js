'use strict';
const Model = require('../Model.js');

const mongoose = require('mongoose');

const inspirationSchema = mongoose.Schema({
  user_id: { type:String, required: true },
  // TODO: User readible content_id (auto-increment, unique)
  // content_id: { type:String, required: true, unique:true },
  content: { type: String, required: true },
  type: { type: String },
});

/**
 * Class representing a Content Item.
 * @extends Model
 */
class Inspiration extends Model {
  constructor() { super(inspirationSchema); }

}
module.exports = Inspiration;