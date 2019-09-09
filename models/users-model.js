'use strict';

let roleSchema = require('./role');

const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
  user_id: {type:String, required: true, unique:true},
  username: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] }
}, {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  }
});

userSchema.virtual('capabilities', {
  ref: 'roleSchema',
  localField: 'role',
  foreignField: 'role',
  justOne: false,
});

userSchema.pre('findOne', async function(){
  try{
    this.populate('capabilities');
  }
  catch(e){
    console.log('there is an error in pre find async function');
  }
});

//TODO: write functionality to compare ID 
newUserSchema.statics.authenticateId = function(auth) {
  try {
    let query = {user_id: auth.user_id};
    if (this.findOne(query)) {
    return (this.findOne(query));
    } else {
      let user = new userSchema(auth.body);
      //TODO: move this to the signup route - new user being created 
      user.save()
        .then(user) => {
          auth.user = user;
          auth.set('role', auth.role);
          res.send(auth.role);
        };
    } 
  } catch(err) {
    console.error(`Error ${err}`);
  }
};


module.exports = mongoose.model('users', newUserSchema);
