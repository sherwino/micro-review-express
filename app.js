const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const passport     = require('passport');
const User         = require('./models/usermod.js');
const flash        = require('connect-flash');
// routes being called.....below
const index          = require('./routes/index.js');
const loginRoutes    = require('./routes/login.js');
const userRoutes     = require('./routes/users.js');
const projectRoutes  = require('./routes/projects.js');
//load our environment variables from the .end file in dev
// this is for dev only but in prod it just doesn't do anything
require('dotenv').config();

//tell node to run the code contained in this file
//this sets up passport and all our strategies
require('./config/passport-config.js');

// mongoose.connect('mongodb://localhost/projectman');
mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'Project-Man';
//
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  key: "user-session",
  secret: 'supermeng99',
  cookie:
  {
    // maxAge: 10000000,//Life of the cookie in ms
    // path: '/'
  },
  // these two options are there to prevent warnings
  resave: true,
  saveUninitialized: true
}) );

//these need to come after the session middleware----as seen above ^^^^

app.use(flash()); //need to use this after the session was created

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  if (req.user) {
    //creates a variable "user" FOR ALL THE VIEWS... yaaay
    res.locals.user = req.user;

  }
  next();
});




///----------------------------ROUTES HERE ---------------------------



app.use('/', index);

app.use('/', loginRoutes);

app.use('/', userRoutes);

app.use('/', projectRoutes);


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
