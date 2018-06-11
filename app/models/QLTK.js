var db = require("../../config/mysql")
exports.loadAll=()=>{
	return new Promise((resolve, reject) => {
		var query =  `select thuthu.Id,thuthu.TenThuThu,thuthu.Email,thuthu.SDT,DATE_FORMAT(thuthu.NgaySinh, '%d/%m/%Y') as NgaySinh,thuthu.GioiTinh from thuthu`;
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}
exports.add=(thuthu)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into thuthu(TenThuThu,Email,SDT,NgaySinh,GioiTinh) values('${thuthu.ten}','${thuthu.email}','${thuthu.sdt}','${thuthu.ngaysinh}','${thuthu.gioitinh}')`;
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				db.query(`insert into taikhoan values('${thuthu.username}','${thuthu.pass}','1',`+results.insertId+`)`);
				resolve(results);
		});
	});
}
exports.getById = (id) => {
	return new Promise((resolve, reject) => {
        var query = `select thuthu.Id, thuthu.TenThuThu,thuthu.Email,thuthu.SDT, DATE_FORMAT(thuthu.NgaySinh, '%Y-%m-%d') as NgaySinh,thuthu.GioiTinh from thuthu where thuthu.Id = ${id}`
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
		var query = ` delete from taikhoan where IdThuThu ='${id}';delete from thuthu where Id = '${id}'`;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}
exports.update=(thuthu)=>{
	return new Promise((resolve, reject) => {
		var query = `update thuthu set TenThuThu = '${thuthu.ten}',Email = '${thuthu.email}',SDT = '${thuthu.sdt}',NgaySinh = '${thuthu.ngaysinh}',GioiTinh = '${thuthu.gioitinh}' where Id = ${thuthu.Id} `;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}
exports.addacc=(thuthu)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into taikhoan(Username,Pass,Quyen,IdThuThu) values('${thuthu.username}','${thuthu.pass}','1','')`;
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}