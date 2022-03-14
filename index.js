
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport');
const { mongoURI } = require('./config/keys');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 *60 * 60 *1000,
  keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
// instead of 
//require('./routes/authRoutes')
//authRoutes(app)


const PORT =  5000;
app.listen(PORT);
console.log('server is running') 
 


//ReactApp communicates with express api by exchange http requrest that contain little snippets of jason dataf
//express interacts iwth mongo db to store records and pull existing records
//inside mongodb collection contains records
//collections are people who have signed up which includes name id... which is a jason file, collection of key value pairs(id, name..)
//each can have its own disticnt charactersitics unlike sql db where each records has the same properties.
//model class: by using mongoos library we make use of the model class which represents an entire mongodb collection
//it is used to access a single collection sitting in mongodb
//which has functions that work with the entire collection like searching or creating collection
//model instances: are javascript objects that representing a single record in the collection
//model class related to one collection and instances each represents one record(inside the collection)
//password: BLQqVexFxwqY9W0h


// client id : 722664295670-542067qhsrfhoc3fvjlrgrp6g3h8a0jg.apps.googleusercontent.com
// client secret : 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