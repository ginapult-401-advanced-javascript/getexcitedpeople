'use strict';

let roleSchema = require('./role');
let quotesSchema = require('../../quotes/quoteSchema.js');

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

userSchema.virtual('quotes', {
  ref: 'quoteSchema',
  localField: 'user_id',
  foreignField: 'user_id',
  justOne: false,
});

userSchema.pre('findOne', async function(){
  try{
    this.populate('capabilities');
    this.populate('quotes');
  }
  catch(e){
    console.log('there is an error in pre find async function');
  }
});


module.exports = mongoose.model('userSchema', userSchema);
