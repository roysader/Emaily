const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport');
//const { mongoURI } = require('./config/keys');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
  })
);

app.use(passport.initialize()); //for express to know that im using passport for google login
app.use(passport.session()); //to start session

//route handlers
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app); 
//requiring (app) to be the route function and then call that route function with the app function.
// instead of 
//require('./routes/authRoutes')
//authRoutes(app)

if (process.env.NODE_ENV === 'production'){  //if any git request comes in for some route or file and we do not understand what its looking for,

  //then look in client/build directory and see if the file is there
  //express will first check to see if there is a specific file its looking for, if there is...
  app.use(express.static('client/build'));

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello server is running')
//     .end();
// });

  //if there is not...and give them back the html file.
  const path= require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('server is running!')
 


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
