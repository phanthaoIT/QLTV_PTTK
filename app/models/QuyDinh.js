var db = require("../../config/mysql")
exports.loadAll=()=>{
    return new Promise((resolve, reject) => {
        var query = `select * from quydinh`;
        db.query(query, (err, results, fields) => {
            if(err)
                reject(err);
            else
                resolve(results);
        });
    });
}
exports.update=(quydinh)=>{
    return new Promise((resolve, reject) => {
        var query = `update quydinh set GiaTri1 = '${quydinh.GiaTri1}',GiaTri2 = '${quydinh.GiaTri2}', GiaTri3 = '${quydinh.GiaTri3}'where Id = '${quydinh.id}' `;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}
exports.getById=(id)=>{
    return new Promise((resolve, reject) => {
        var query = `select GiaTri1,GiaTri2, GiaTri3 from quydinh where Id = ${id} `;
        db.query(query, (err, result, fields) => {
            if (err)
                reject(err);
            else
                resolve(result);
        }); 
    })
}