const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is from mongodb and not the profile ID.
  //after user signs in we only care of internal ID from mongodb.
});

passport.deserializeUser((id,done)=>{
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

    (accessToken, refreshToken, profile, done) => //user has already been granted permission, goes to the server instead of passing to google.
    {
      /*console.log("ACCESS TOKEN", accessToken);
      console.log("REFRESH TOKEN", refreshToken);
      console.log("PROFILE", profile);*/
      console.log("PROFILE", profile)
      User.findOne({googleId: profile.id}) //will initiate the query //find one returns a promise, since async
          .then(existingUser=> 
      {
          if(!existingUser){
            //we alreayd have a record with the given profile ID
            done(null, existingUser);
          } else {
            //if we dont have  a user record with this id, make a new record
            new User({
               googleId: profile.id,
                sub: profile.sub,
                // name: profile.name,
                given_name: profile.given_name,
                family_name: profile.family_name,
                picture: profile.family_name,
                email: profile.email,
                email_verified: profile.email_verified,
                locale: profile.locale,
              }).save()
            .then(user => {
              console.log('user after save to db ', user);
              done(null, user)
            });
      
            //call back function(2nd argument)
            //take identifying user info and save it to dabatabase, if we want t o.
            }
      });
    } 
  )
); 