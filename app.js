const express           = require('express');
const path              = require('path');
const favicon           = require('serve-favicon');
const logger            = require('morgan');
const cookieParser      = require('cookie-parser');
const bodyParser        = require('body-parser');
const layouts           = require('express-ejs-layouts');
const mongoose          = require('mongoose');
const session           = require('express-session');
const LocalStrategy     = require('passport-local').Strategy;
const cors              = require('cors'); // don't think I need this yet
//google Strategy needs to be added
// facebook Strategy needs to be added
const passport          = require('passport');
const User              = require('./models/usermod.js');
const flash             = require('connect-flash');
// custom routes being called.....below
const index             = require('./routes/index.js');
const loginRoutes       = require('./routes/login.js');
const userRoutes        = require('./routes/users.js');
const productAPIroutes  = require('./routes/products.js');

//load our environment variables from the .env file in dev
// in production it will get the .env values from server
require('dotenv').config();

//tell node to run/load the passport-config file
//this sets up passport and all our strategies
require('./config/passport-config.js');

// mongoose.connect('mongodb://localhost/micro-reviews');
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
// here you tell the express app that the view files are found in the views directory
app.set('views', path.join(__dirname, 'views'));
// then you define the type of view engine we are going to use
// here we are using ejs cause it adds some functionality to regular html files...kinda like ERB files in ruby.
app.set('view engine', 'ejs');

// default value for the title of the page
// not sure if app.locals is an express thing, need to look into what other locals can be set
app.locals.title = 'microReviews';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// this is all of the middelware that is going to handle the data being passed
// either through url param, body or through session/browser instances
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// here we tell express that the static files are going to be found in public
app.use(express.static(path.join(__dirname, 'public')));

// need to see how i could set a library folder... I couldn't access it last I tried
// app.use(express.static(path.join(__dirname, './lib/')));

// express use the layouts system, so that I don't have to repeat myself when creating html pages
app.use(layouts);
// create a user session
app.use(session({
  key: "user-session",
  secret: 'supermeng99',
  cookie:
  {
    maxAge: 86400000,//Life of the cookie in ms... I put 24 hours
    path: '/'
  },
  // these two options are there to prevent warnings
  // not to clear about these options need to read into it
  resave: true,
  saveUninitialized: true
}) );

//these need to come after the session middleware----as seen above ^^^^
// flash is used so that I could flash messages/errors to the user
app.use(flash()); //need to use this after the session was created

// passport does all of the user authentication
app.use(passport.initialize());
app.use(passport.session());

// if we have a user, use it!
app.use((req, res, next) => {
  if (req.user) {
    //creates a variable "user" FOR ALL THE VIEWS... yaaay
    res.locals.user = req.user;

  }
  next();
});

///----------------------------ROUTES HERE ---------------------------

// these are all of the routes we want to access in the app
// they are required up there ^^^^^^
// then used here under the middleware
// each route has instructions how to handle each type of http request/response for each page
// get / post / put / update / delete

app.use('/', index);

app.use('/', loginRoutes);

app.use('/', userRoutes);

app.use(cors());

app.use('/', productAPIroutes);


///-------------------------ROUTES ABOVE ------------------------------

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
