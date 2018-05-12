var db = require("../../config/mysql")
exports.loadAll=()=>{
	return new Promise((resolve, reject) => {
		var query = 'select * from nxb';
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}
exports.add=(nxb)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into nxb(TenNXB) values('${nxb.ten}')`;
		console.log(query);
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}
exports.getById = (id) => {
	return new Promise((resolve, reject) => {
		var query = `select * from nxb where Id = ${id}`;
		mysql.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result[0]);
		});
	});
}
exports.delete = (id) => {
	return new Promise((resolve, reject) => {
		var query = `delete from nxb where Id = '${id}'`;
		mysql.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}