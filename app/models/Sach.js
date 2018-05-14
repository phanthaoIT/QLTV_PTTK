var db = require("../../config/mysql")
exports.loadAll=()=>{
    return new Promise((resolve, reject) => {
        var query = 'select * from sach';
        db.query(query, (err, results, fields) => {
            if(err)
                reject(err);
            else
                resolve(results);
        });
    });
}
exports.add=(sach)=>{
    return new Promise((resolve, reject) => {
        var query = `insert into sach(TenSach,TacGia,NgayNhap,NamXB,SoLuong,IdTheLoai,IdNXB) values('${sach.ten}','${sach.tacgia}','${sach.ngaynhap}','${sach.namxb}','${sach.soluong}','${sach.idtheloai}','${sach.idnxb}')`;
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
        var query = `select * from sach where Id = ${id}`;
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
        var query = `delete from sach where Id = '${id}'`;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}
exports.update=(sach)=>{
    return new Promise((resolve, reject) => {
        var query = `update sach set TenSach = '${sach.ten}',TacGia = '${sach.tacgia}', NgayNhap='${sach.ngaynhap}',NamXB = '${sach.namxb}',SoLuong = '${sach.soluong}',IdTheLoai = '${sach.idtheloai}',IdNXB = '${sach.idnxb}' where Id = ${sach.Id} `;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}