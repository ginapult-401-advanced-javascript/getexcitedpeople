'use strict';

const mongoose = require('mongoose');

<<<<<<< HEAD
/**
 * role constructor for our eventual addition of admin functionality 
 */
=======

/*
>>>>>>> ah-ll-tests
const capabilities = {
  admin: ['create', 'read', 'update', 'delete'],
  user: ['read', 'deleteLocal', 'updateLocal', 'createLocal'],
};
*/

/**
 * role capabilities
 */
const roleSchema = mongoose.Schema({
  role: { type: String, required: true }, 
  capabilities: { type: Array, required: true }, 
});


module.exports = mongoose.model('roles', roleSchema);