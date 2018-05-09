var http = require('http');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var app = express();
var hbs = exphbs.create({
    // properties used by express-handlebars configuration ...
});
express_handlebars_sections(hbs);
var server = http.createServer(app);

var mysql = require('./config/mysql')
require('./routes/index')(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use("/static",express.static(__dirname+"/public"));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


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




server.listen(3000, (err) => {
	if(err)
		console.log(err);
	else
		console.log("Run at port 3000");
})


mysql.connect((err) => {
	if(err)
		console.log(err);
	else
		console.log('connected');
})