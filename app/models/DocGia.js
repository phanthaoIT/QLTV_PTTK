var db = require("../../config/mysql")
exports.loadAll=()=>{
	return new Promise((resolve, reject) => {
		var query =  `select docgia.Id,docgia.TenDocGia,docgia.DiaChi,DATE_FORMAT(docgia.NgaySinh, '%d/%m/%Y') as NgaySinh,docgia.Email,docgia.GioiTinh,DATE_FORMAT(docgia.NgayLapThe, '%d/%m/%Y') as NgayLapThe,DATE_FORMAT(docgia.HanThe, '%d/%m/%Y') as HanThe from docgia`;
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}
exports.add=(docgia)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into docgia(TenDocGia,DiaChi,NgaySinh,Email,GioiTinh,NgaylapThe,HanThe) values('${docgia.ten}','${docgia.diachi}','${docgia.ngaysinh}','${docgia.email}','${docgia.gioitinh}','${docgia.ngaylapthe}','${docgia.hanthe}')`;
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
        var query = `select docgia.Id, docgia.TenDocGia, docgia.DiaChi, DATE_FORMAT(docgia.NgaySinh, '%Y-%m-%d') as NgaySinh,docgia.Email,docgia.GioiTinh,DATE_FORMAT(docgia.NgayLapThe, '%Y-%m-%d') as NgayLapThe,DATE_FORMAT(docgia.HanThe, '%Y-%m-%d') as HanThe from docgia where docgia.Id = ${id}`
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
		var query = `delete from docgia where Id = '${id}'`;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}
exports.update=(docgia)=>{
	return new Promise((resolve, reject) => {
		var query = `update docgia set TenDocGia = '${docgia.ten}',NgaySinh = '${docgia.ngaysinh}',GioiTinh = '${docgia.gioitinh}',Email = '${docgia.email}',DiaChi = '${docgia.diachi}' where Id = ${docgia.Id} `;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}


