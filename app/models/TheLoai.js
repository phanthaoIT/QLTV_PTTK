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
exports.add=(theloai)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into theloai(TenTheLoai) values('${theloai.ten}')`;
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
		var query = `select * from theloai where Id = ${id}`;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result[0]);
		});
	});
}
exports.delete = (id) => {
	return new Promise((resolve, reject) => {
		var query = `delete from theloai where Id = '${id}'`;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}
exports.update=(theloai)=>{
	return new Promise((resolve, reject) => {
		var query = `update theloai set TenTheLoai = '${theloai.ten}' where Id = ${theloai.Id} `;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}