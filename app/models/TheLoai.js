var db = require("../../config/mysql")
function loadAll(){
	return new Promise((resolve, reject) => {
		var query = 'select * from theloai';
		con.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results)
		})
	});
}