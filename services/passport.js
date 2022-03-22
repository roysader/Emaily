const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {//encodes userId inside Cookies  //take a user model and generate a token that will be stuffed in the cookie
  done(null, user.id); //user.id is from mongodb and not the profile ID.
  //after user signs in we only care of internal ID from mongodb.
  //DONE is a callback
  
});

passport.deserializeUser((id,done)=>{ //encodes userId inside Cookies  //take the token pass it into deserialized user and turn it back into User Model
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use
(
  new GoogleStrategy
  (
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    }, 

    (accessToken, refreshToken, profile, done) => //user has already been granted permission, goes to the server instead of passing to google.//callback function
    {
      /*console.log("ACCESS TOKEN", accessToken);
      console.log("REFRESH TOKEN", refreshToken);
      console.log("PROFILE", profile);*/
      console.log("PROFILE", profile)
      User.findOne({googleId: profile.id}) //will initiate the query //find one returns a promise, since async
          .then(existingUser=> 
      {
          if(existingUser){
            //we alreayd have a record with the given profile ID
            done(null, existingUser);//userModel
          } else {
            // we don't have a user record with this ID, make a new record!
            new User({ googleId: profile.id })
              .save()
              .then((user) => done(null, user))//database;

              //call back function(2nd argument)
              //take identifying user info and save it to dabatabase, if we want t o.
          }
        });
      }
    )
  ); 