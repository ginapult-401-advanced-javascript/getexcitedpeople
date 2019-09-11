'use strict';

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  user_id: {type:String, required: true, unique:true},
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
}, {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
});

userSchema.virtual('capabilities', {
  ref: 'roleSchema',
  localField: 'role',
  foreignField: 'role',
  justOne: false,
});

userSchema.virtual('content', {
  ref: 'contentSchema',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: false,
});

/**
 * Hooks up the user schema with the role and inspiration schema by user_id.
 */

userSchema.pre('findOne', async function(){
  try{
    this.populate('capabilities');
    this.populate('content');
  }
  catch(e){
    console.log('there is an error in pre find async function');
  }
});

/**
 * Checks slack user ID against db to see if exists.
 *
 * @param {string} user_id - User ID
 * @param {string} query - user query
 * @returns {user.user_id}
 */

userSchema.statics.checkSlackId = function(user_id){
  const query = {user_id: user_id};
  return this.findOne(query)
    .then (user => {
      if (user) {
        return user.user_id;
      } else {
        const userData = {
          user_id: user_id,
          user_role: user,
        };
        const newUser = new userSchema(userData);
        return newUser.save()
      }
    })
    .then (user => {
      return user.user_id; 
      // TODO: Stretch Goal - response.set('role', auth.role)
    })
    .catch(console.error);
};

module.exports = mongoose.model('userSchema', userSchema);
