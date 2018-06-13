var db = require("../../config/mysql")
exports.load=()=>{
	return new Promise((resolve, reject) => {
		var query = 'select count(*) as sach from sach;select count(*) as docgia from docgia;select count(*) as muontra from muontra;select count(*) as nxb from nxb;select count(*) as theloai from theloai';
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}