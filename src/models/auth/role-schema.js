'use strict';

const mongoose = require('mongoose');


const capabilities = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['read', 'deleteLocal', 'updateLocal', 'createLocal'],
};

const roleSchema = mongoose.Schema({
  role: { type: String, required: true }, 
  capabilities: { type: Array, required: true }, 
});


module.exports = mongoose.model('roles', roleSchema);