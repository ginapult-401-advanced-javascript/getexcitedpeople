'use strict';
/**
 Why are these schema paths so different?
 You may want to think about putting your models in a similar path relative to each other.
*/
let roleSchema = require('./role'); // TODO: pick a requiring syntax, this file doesn't use .js but the one below does.
let contentSchema = require('../../content/content-schema.js/index.js');

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

userSchema.pre('findOne', async function(){
  try{
    this.populate('capabilities');
    this.populate('content');
  }
  catch(e){
    console.log('there is an error in pre find async function');
  }
});

userSchema.statics.checkSlackId = function(user_id){
  try {
    const query = {user_id: user_id};
    const user = this.findOne(query); // Is this not asynchronous?
    if (user) {
      return user.user_id;
    } else {
      const userData = {
        user_id: user_id,
        user_role: user,
      };
      const newUser = new userSchema(userData);
      newUser.save()
        .then(user => {
          return user.user_id; 
          // response.set('role', auth.role); - Jacob: this should be removed if it's not being used. You don't want to commit un-used code to master / production.
        });
    } 
  } catch(err) {
    console.error(`Error ${err}`);
  }
};

/**
  TODO: Remove some of these blank lines.  There's too many.
*/



module.exports = mongoose.model('userSchema', userSchema);
