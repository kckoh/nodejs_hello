var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const bodyParser = require("body-parser");

// database
const conn = require("./public/config.js")

var session = require('express-session');

const product = require("./routes/product.js")

const login = require("./routes/login.js")

const register = require("./routes/register.js")

const post = require("./routes/post.js")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//using sessesion
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true

}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register',register);
app.use('/login', login)
//prodcut routes
app.use("/product", product);

//register routes
app.use("/register", register);

app.use("/", post);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
