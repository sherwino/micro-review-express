const express       = require('express');
const bcrypt        = require('bcrypt');
const passport      = require('passport');
const User          = require('../models/usermod.js');
const LocalStrategy = require('passport-local').Strategy;
const ensure        = require('connect-ensure-login');
const authRoutes    = express.Router();

// ROUTES GO HERE
authRoutes.get('/signup',
  //redirects to root if you Are Logged In
  ensure.ensureNotLoggedIn('/'),

  (req, res, next) => {
  res.render('login/signup.ejs', {
    title:    'Project Man - Signup',
    layout:   'layouts/signup-layout'
  });
});


authRoutes.post('/signup', (req, res, next) => {
  const signName      = req.body.signupName;
  const signEmail     = req.body.signupEmail;
  const signPassword  = req.body.signupPassword;

//Don't let users submit blank usernames or passwords
  if (signEmail === '' || signPassword === '') {
    res.render('login/signup.ejs', {
      errorMessage: 'Please provide a username and password.'
    });
    return;
  }

//IF YOU WANT TO CHECK PASSWORD LENGTH, CHARACTERS, ETC YOU WOULD DO IT HERE
  User.findOne(
    //first argument is the criteria which documents you want
    { email: signEmail },
    //second argument is the projection, which field you want to see
    { email: 1 },
    //third argument callback
    ( err, foundUser ) => {
    //see if the db query had an error
      if (err) {
        next(err);
        return;
      }
    //Don't let the user register if the username is taken
      if (foundUser) {
        res.render('login/signup.ejs', {
          errorMessage: 'That username has been taken.'
        });
        return;
      }
    //once you get to this point you should be able to save the user

    //encrypt the password that the user submitted
      const salt     = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(signPassword, salt);

    //create the user
      const theUser = new User({
        name:               signName,
        email:              signEmail,
        password:           hashPass

      });
      //save the use to the db, unless if there is an error
      theUser.save((err) => {
        if (err) {
          next(err);
          return;
        }

        //before the redirect you could flash a message to the user using the flash package

        //store a message in the session/box to display after the redirect
        req.flash(
          //1 arg is a key of the message
          'success',
          //2nd argument is the actual message you want to display to the user
          'You have registered succesfully!'
        );

        res.redirect('/');
      });
    }
  );
});

authRoutes.get('/login', (req, res, next) => {
  res.render('login/login.ejs', {
    title:          'Project Man - Login',
    layout:         'layouts/signup-layout',
    errorMessage:   req.flash('error')
  });

});

//<form method="post" actopm="/login">
authRoutes.post('/login',

//redirects to root if you Are Logged In
ensure.ensureNotLoggedIn('/'),

  passport.authenticate('local', { //using local as in 'LocalStrategy', { options }
  successRedirect:    '/',      //instead of using regular express redirects we are using passport
  successFlash:       true,
  failureRedirect:    '/login',
  failureFlash:       true
} )
);

authRoutes.get('/logout', (req, res, next) => {
  req.logout(); //this a passport method
  req.flash('success', 'You have logged out successfully');
  res.redirect('/');
});

module.exports = authRoutes;
