var db = require("../../config/mysql")
exports.loadAll=()=>{
	return new Promise((resolve, reject) => {
        var query = `select muontra.MaDocGia,docgia.TenDocGia, sach.TenSach,sach.TacGia,theloai.TenTheLoai,DATE_FORMAT(muontra.NgayMuon, '%d/%m/%Y') as NgayMuon,muontra.SoLuong,muontra.MaSach from sach, muontra,docgia,theloai where muontra.MaDocGia=docgia.Id and muontra.MaSach = sach.Id and sach.IdTheLoai = theloai.Id` ;
		db.query(query, (err, results, fields) => {
			if(err)
				reject(err);
			else
				resolve(results);
		});
	});
}
exports.add=(muontra)=>{
	return new Promise((resolve, reject) => {
		var query = `insert into muontra(MaDocGia,MaSach,SoLuong,NgayMuon) values('${muontra.docgia}','${muontra.sach}','${muontra.soluong}','${muontra.ngaymuon}')`;
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
        var query = `select docgia.Id,docgia.TenDocGia, sach.TenSach,sach.TacGia,theloai.TenTheLoai,DATE_FORMAT(muontra.NgayMuon, '%d/%m/%Y') as NgayMuon,muontra.SoLuong from sach, muontra,docgia,theloai where docgia.Id = ${id}`
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result[0]);
		});
	});
}
exports.delete = (trasach) => {
	return new Promise((resolve, reject) => {
		var query = `delete from muontra where MaDocGia = '${trasach.id}' and MaSach='${trasach.sach}'`;
		db.query(query, (err, result, fields) => {
			if (err)
				reject(err);
			else
				resolve(result);
		}); 
	})
}