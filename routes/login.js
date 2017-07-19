// This route is for all things dealing with loging in and out
const express       = require('express');
const bcrypt        = require('bcrypt');
const passport      = require('passport');
const User          = require('../models/usermod.js');
const LocalStrategy = require('passport-local').Strategy;
//google Strategy
// facebook Strategy
const ensure        = require('connect-ensure-login');
const authRoutes    = express.Router();

// ROUTES GO HERE
// I put a prefix in the app.js file so this url is now
// localhost:3000/api/signup

//--------------------------------SIGN UP (POST) ----------------------
authRoutes.post('/signup', (req, res, next) => {
  const signName      = req.body.signupName;
  const signEmail     = req.body.signupEmail;
  const signPassword  = req.body.signupPassword;

  //Don't let users submit blank anything
  if (signEmail === '' || signPassword === '' || signName === '') {
    res.status(400).json({ message: 'You need to provide a name, email, and, password to join'});
    return;
  }

  //IF YOU WANT TO CHECK PASSWORD LENGTH, CHARACTERS, ETC YOU WOULD DO IT HERE
  User.findOne(
    // first we want to see if this email is taken
    // email: is the DB key
    // signEmail is the variable I created above, it is from form/middleware
    { email: signEmail },
    //second argument is the projection, which field you want to see
    // don't really need to make a projection unless if I wanted to console results
    { email: 1 },
    //third argument callback ( ifyouhaveError, ifyoufoundauser )
    ( err, foundUser ) => {
      //if the query had an error
      if (err) {
        res.status(500).json({ message: 'Email Query Failed' });
        return;
      }
      //Don't let the user register if the email is taken
      if (foundUser) {
        res.status(400).json({ message: `That email has already been taken
          by another user...or you might already have an account`});
          return;
        }
        //once you get to this point you should be able to save the user

        //encrypt the password that the user submitted
        // just throw some salt on that ishh
        const salt     = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(signPassword, salt);

        //create the user
        const theUser = new User({
          name:               signName,
          email:              signEmail,
          password:           hashPass

        });
        // save the user you just created using the constructor above to the db
        // unless if there is an error
        theUser.save((err) => {
          if (err) {
            res.status(500).json({ message: 'Tried to save the user, but something went wrong.'});
            return;
          }

          //before the redirect you could flash a message to the user using res.status
          req.login(theUser, (err) => {
            if (err) {
              res.status(500).json({ message: "Tried to log you in but that didn\'t work."});
              return;
            } //close if (error)
            res.status(200).json(theUser);
          }); //close req.login
        }); //close theUser.save to the DB
      } //end of the giant callback after searching for email
    ); //end of the User.findOne
  }); //end of the post route
//--------------------------------</SIGN UP (POST) >----------------------


//--------------------------------LOG IN (POST) ----------------------

authRoutes.post('/login',

//redirects to root if you Are Logged In
ensure.ensureNotLoggedIn('/'),
// I should have lots to say about the code below...
( req, res, next ) => {
  const passportFunction = passport.authenticate('local', (err, theUser, failureMessage ) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong as I tried to log you in"});
      return;
    }
    if (!theUser) {
      res.status(401).json(failureMessage);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong with the passport login'});
      }
        res.status(200).json(theUser);
    });
});

passportFunction( req, res, next);

});

//--------------------------------</LOG IN (POST) ----------------------


//--------------------------------LOG OUT (POST) ----------------------

authRoutes.post('/logout', (req, res, next) => {
  req.logout(); //this a passport method
  res.status(200).json({ message: 'You have been successfully logged out'});

});

// this is just so that we could check if the user login worked.
// if not give the user an Unauthorized access message.
authRoutes.get('/checklogin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: 'Unauthorized access.'});
  return;
});

//--------------------------------</LOG OUT (POST) ----------------------

module.exports = authRoutes;










//--------------------------------LOGIN (GET) ----------------------
// Don't think I need if I am handling in angular
// authRoutes.get('/login', (req, res, next) => {
//   res.render('login/login.ejs', {
//     title:          'Project Man - Login',
//     layout:         'layouts/signup-layout',
//     errorMessage:   req.flash('error')
//   });
//
// });


//--------------------------------SIGN UP (GET) ----------------------
// I think we don't need a signup get page in express we are rendering this page in angular
//
// authRoutes.get('/signup',
//   //redirects to root if you Are Logged In
//   ensure.ensureNotLoggedIn('/'),
//
//   (req, res, next) => {
//   res.render('login/signup.ejs', {
//     title:    'Sign-Up - microReviews',
//     layout:   'layouts/signup-layout'
//   });
// });
//
