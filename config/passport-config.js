//need to look over this

const User          = require('../models/usermod.js');
const passport      = require('passport');
const bcrypt        = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;


// function passportSetup () {

//PASSPORT GOES THROUGH THE FOLLOWING:
// -- 1. Our Form
// == 2. LocalStrategy callback
// -- 3. if succesful --- passport.serializeUser()

//determines what to save in the session (called when you login)
passport.serializeUser((user, cb) => {
//cb is short for callback
  cb(null, user._id);
});


//where to get the rest of the users' information (called on every request after)
passport.deserializeUser((userId, cb) => {
//query the database with the ID from the box
  User.findById(userId, (err, theUser) =>{
    if (err) {
      cb(err);
      return;
    }
//sending the users info to the passport
    cb(null, theUser);
  });

});


// The same as:
// const passportLocal = require('passport-local');
// const LocalStrategy = passportLocal.Strategy;

passport.use( new LocalStrategy (
  // 1st arg are just the options to customize the LocalStrategy
  //LocalStrategy assumes that you loginforms are going to be named <input name="username" <input name="password"
  //if it doesn't match what the passport assumes you have to define the names of the inputs below
  {
    //the usernameField is a STD key from passport it has to always be named this way
    usernameField: 'user',  //<----you could only customize the string
    passwordField: 'password'
   },
  //2nd argument is a callback for the lofic that validates the login
  (user, password, next) => {
    User.findOne(
      { email: user },
      (err, theUser ) => {
        // tell passport if there was an error
        if (err) {
          next(err);
          return;
        }
        // telling passport if there is no user with the given username
        if (!theUser) {
          //   the err argument in this case is blank, and in the second arg fale means Log In Failed.
          //   we could customize the feedback messages
          next(null, false, { message: 'Wrong username! AAAAAAH!'}); //this is specific to passport, not express
          return;            //^^ this message is refering to req.flash('error')
        }

        //at this point the username is correct... so the next step is to check the password
        //bcrypt receives two arguments, the variable you are checking for and the original encryptedPassword
        if(!bcrypt.compareSync(password, theUser.password )) {
          // false in 2nd argument means log in Failed
          next(null, false, { message: 'You sure you remember your password'});
          return;
        }
        //when we get to this point of the code....we have passed all of the validations
        //then we give passport the user's details, because there hasn't been an error
        next(null, theUser, { message: `Welcome ${theUser.name}`});
              // this user goes ot passport.serializeUser
      });
    }
) );




// module.exports = passportSetup;
