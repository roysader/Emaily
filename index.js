
const express = require('express');
require('./services/passport');
// const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
// mongoose.connect(keys.mongoURI);


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