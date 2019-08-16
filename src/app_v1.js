var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

require('./global');
var { rootSubPath } = $arr.html;

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(rootSubPath || '/', express.static(path.join(__dirname, 'public')));

app.use(rootSubPath || '/', index);
app.use(rootSubPath + '/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var server = http.createServer(app).listen(2019);
//var server = http.createServer(app).listen(process.env.PORT);

console.log(`Server running at ${$arr.html.rootpath}`);
