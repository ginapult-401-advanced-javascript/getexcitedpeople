'use strict';
const Model = require('../Model.js');
const schema = require('./content-schema');

/**
 * Class representing a Content Item.
 * @extends Model
 */
class Content extends Model {
  constructor() { super(schema); }

}
module.exports = Content;