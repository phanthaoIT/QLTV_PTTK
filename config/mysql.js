var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'qltv',
	insecureAuth : true
});


module.exports = connection;