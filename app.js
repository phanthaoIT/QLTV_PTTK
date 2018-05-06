var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var express_handlebars_sections = require("express-handlebars-sections");
var app = express();
app.use(bodyParser.json());

app.set("views",__dirname+"/app/views");
app.engine('handlebars', exphbs({
  //  defaultLayout: 'index',
    layoutsDir: "./app/views",
    helpers: {
        section: express_handlebars_sections()
    }
}));
app.set('view engine', 'handlebars');
// static folder
app.use("/static",express.static(__dirname+"/public"));

var controllers = require(__dirname +"/app/controllers");
app.use(controllers);
var host = config.get("server.host");
var port = config.get('server.port')
app.listen(port,host,function(){
	console.log("Server is running on port",port);

});