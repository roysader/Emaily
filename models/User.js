const mongoose = require('mongoose');
const {Schema} = mongoose; 
//const Schema = mongoose.Schema; 
//same as above
//mongoose object has a property called "schema", take that prop and asign to new property called "schema"


const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema); 
//by using mongoose.model command, we are telling mongoose that we want to create a new collection by the name of 'users'
