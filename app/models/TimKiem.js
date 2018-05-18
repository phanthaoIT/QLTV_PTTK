var db = require("../../config/mysql")
exports.loadAll=()=>{
    return new Promise((resolve, reject) => {
        var query = `select sach.Id,sach.TenSach,theloai.TenTheLoai,sach.TacGia,sach.SoLuong from sach, theloai where sach.IdTheLoai = theloai.Id `;
        db.query(query, (err, results, fields) => {
            if(err)
                reject(err);
            else
                resolve(results);
        });
    });
}
