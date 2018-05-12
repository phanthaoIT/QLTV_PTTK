var http = require('http');
var createError = require('http-errors');
var express = require('express');
var exphbs = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('./config/mysql');

var app = express();
var server = http.createServer(app);
var hbs = exphbs.create({
    // properties used by express-handlebars configuration ...
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
require('./routes/index')(app);
// catch 404 and forward to error handler
//app.use(function(req, res, next) {
  //next(createError(404));
//});
// error handler
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