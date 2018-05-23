var db = require("../../config/mysql")
exports.loadAll=()=>{
    return new Promise((resolve, reject) => {
        var query = `select sach.Id,sach.TenSach,sach.TacGia,DATE_FORMAT(sach.NgayNhap, '%d/%m/%Y') as NgayNhap,sach.NamXB,sach.SoLuong,nxb.TenNXB , theloai.TenTheLoai from sach, nxb , theloai where sach.IdNXB = nxb.Id and sach.IdTheLoai = theloai.Id `;
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
        var query = `update sach set TenSach = '${sach.ten}',TacGia = '${sach.tacgia}',NamXB = '${sach.namxb}',SoLuong = '${sach.soluong}',IdTheLoai = '${sach.idtheloai}',IdNXB = '${sach.idnxb}' where Id = ${sach.Id} `;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}

exports.loadById=(id)=>{
    return new Promise((resolve, reject) => {
        var query = `select sach.Id, sach.TenSach, sach.TacGia, DATE_FORMAT(sach.NgayNhap, '%Y-%m-%d') as NgayNhap,sach.NamXB, sach.SoLuong, sach.IdTheLoai, sach.IdNXB, theloai.TenTheLoai as theloai from sach, theloai where sach.IdTheLoai = theloai.Id and sach.Id = ${id}`
        db.query(query, (err, result, fields) => {
            if(err)
                reject(err);
            else
                resolve(result[0])
        })
    })
}
exports.updateSL=(sach)=>{
    return new Promise((resolve, reject) => {
        var query = `update sach set SoLuong = SoLuong-'${sach.soluong}' where Id = ${sach.sach} `;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}
exports.search=(t)=>{
    return new Promise((resolve, reject) => {
        var query = `select sach.Id,sach.TenSach,sach.TacGia,sach.SoLuong,nxb.TenNXB , theloai.TenTheLoai from sach, nxb , theloai where sach.IdNXB = nxb.Id and sach.IdTheLoai = theloai.Id and sach.TenSach like "%${t}%"`;
       console.log(query);
        db.query(query, (err, results, fields) => {
            if(err)
                reject(err);
            else
                resolve(results);
        });
    });
}