const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session')
const passport = require('passport');
//const { mongoURI } = require('./config/keys');
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


//Emaily-dev Google
//Client ID: 492326008713-tbheu63m74i1gehrvumu2a672k0bhd7b.apps.googleusercontent.com
//Client Secret: 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

// Emaily OAuth Client Created Google
// credentials
// client Id: 533401416586-pla9lj34d6lsdqgrngc3lsk99k0bneoa.apps.googleusercontent.com
// client secret: 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

//stephan's emaily id: emaily-171321


//first

////https://accounts.google.com/o/oauth2/v2/auth?response_type=code&
//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
//scope=profile+email&client_id=237014995102-skoamni8m60sm9k4akgbshkud5b7q6p8.apps.googleusercontent.com&flowName=GeneralOAuthFlow

//second

//http://localhost:5000/auth/google/callback?code=
//4%2F0AX4XfWiLbNog5dPQjpZak9xe2S_-gKoashD2tG3_VYRs7zSEKPpllj2WrCckBKN2odyZlw&
//scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=consent

//MongoDB
//username: roy           //stephan's username: p00gz
//psw: MvLjtwv9yngnQzpU   //psw: rbBY3TQRxRGaFHc
//connection string: mongodb+srv://roy:MvLjtwv9yngnQzpU@emaily.whfuo.mongodb.net/test
//project ID: 62288ce217b23174b35e6f32

//Mongodb
//emaily-dev
//username: roy 
//psw: BnHmtCJSHrUxsiO1
//mongodb+srv://roy:BnHmtCJSHrUxsiO1@emaily-dev.x4goz.mongodb.net/emaily-dev?retryWrites=true&w=majority
//project ID: 622b5299e3ab1d747c088f79

//emaily-prov
//usernameP: royo
//psw: IaLG8CPTR5zNbihn
//mongodb+srv://royo:IaLG8CPTR5zNbihn@cluster0.17cvj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//Client ID: 722664295670-542067qhsrfhoc3fvjlrgrp6g3h8a0jg.apps.googleusercontent.com
//Client Secret: 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
