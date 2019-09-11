'use strict';
const Model = require('../Model.js');

require('dotenv').config();

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection(process.env.MONGODB_URI);

autoIncrement.initialize(connection);

const inspirationSchema = mongoose.Schema({
  user_id: { type:String, required: true },
  // TODO: User readible content_id (auto-increment, unique)
  display_id: { type:Number, unique:true, ref: 'display_id' },
  content: { type: String, required: true },
  type: { type: String },
});

// inspirationSchema.pre('save',function(){
//   display_id = 
// });

inspirationSchema.plugin(autoIncrement.plugin, 'display_id');

/**
 * Class representing a Content Item.
 * @extends Model
 */
class Inspiration extends Model {
  constructor() { super(inspirationSchema); }

}
module.exports = Inspiration;
