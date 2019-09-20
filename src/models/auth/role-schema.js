'use strict';

const mongoose = require('mongoose');

/**
 * role capabilities
 */
const roleSchema = mongoose.Schema({
  role: { type: String, required: true }, 
  capabilities: { type: Array, required: true }, 
});


module.exports = mongoose.model('roles', roleSchema);
