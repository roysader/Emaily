const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',//when someone visits the Route handler, they should be directed into the 'passport.authenticate' Flow.
    passport.authenticate('google', {  //authenticate using Google use the 'new GoogleStrategy' Stragety in passport 
        scope: ['profile', 'email'] //what access we want to have inside the user profile.
    })
  );
  
  app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => res.redirect('/surveys'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
    // res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
     //res.send(req.user);
  });
};

