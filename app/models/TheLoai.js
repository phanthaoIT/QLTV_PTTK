var db = require("../../config/mysql")
exports.loadAll=()=>{
	return new Promise((resolve, reject) => {
		var query = 'select * from theloai';
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}