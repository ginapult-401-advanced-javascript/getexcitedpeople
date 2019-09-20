'use strict';
const Model = require('../Model.js');

require('dotenv').config();

const mongoose = require('mongoose');
const inspirationSchema = mongoose.Schema({
  user_id: { type:String, required: true },
  content: { type: String, required: true },
  type: { type: String },
});

const inspirationMongooseModel = mongoose.model('inspirationSchema', inspirationSchema);

/**
 * Class representing a Content Item.
 * @extends Model
 */
class Inspiration extends Model {
  constructor() { super(inspirationMongooseModel); }

}
module.exports = Inspiration;
