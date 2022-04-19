const passport = require('passport');

module.exports = app => {

  //handlers

  app.get('/auth/google',//when someone visits the Route handler, they should be directed into the 'passport.authenticate' Flow.
    passport.authenticate('google', {  //authenticate using Google use the 'new GoogleStrategy' Stragety in passport 
        scope: ['profile', 'email'] //what access we want to have inside the user profile.
    })
  );
  
  app.get('/auth/google/callback',
    passport.authenticate('google'), 
    (req, res) => {
        res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {    //Route Handler
    req.logout();  //logs out by removing the id from the cookies
    res.redirect('/');
    //res.send(req.user); //prove to user that theyre not signed
    // res.redirect('/');
  });

  //who ever goes through the oath flow will have access to the user "req.user"
  app.get('/api/current_user', (req, res) => { //Route Handler
    res.send(req.user); 
    //res.send(req.session);
  });
};

