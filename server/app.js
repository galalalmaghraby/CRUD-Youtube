var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const cors = require('cors')
var app = express();
app.use(cors())

// auto reload
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
 
const connectLivereload = require("connect-livereload");
const { default: mongoose } = require('mongoose');
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
}); 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// connect database
mongoose.connect("mongodb+srv://galal:galal@cluster0.apvofhx.mongodb.net/CRUD?retryWrites=true&w=majority").then(()=>{
  console.log('connected DB !');
}).catch(err=>{
  console.log("Connected DB Failed !");
})

app.use('/', indexRouter);

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
