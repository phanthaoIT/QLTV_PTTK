var express = require('express');
var sach_md=require("../models/Sach");
var router = express.Router();
router.get('/list', (req, res) => {
    sach_md.loadAll().then(rows => {
        var vm = {
         sach:rows,
       };
        res.render('sach/list',vm);
    });
});
router.post('/list', function(req, res){
        var sach={
          'ten':req.body.ten,
          'tacgia':req.body.tacgia,
          'ngaynhap':req.body.ngaynhap,
          'namxb':req.body.namxb,
          'soluong':req.body.soluong,
          'idtheloai':req.body.idtheloai,
          'idnxb':req.body.idnxb,
        }
    sach_md.add(sach).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        console.log(err);
    });
});

router.post('/delete', (req, res) => {
    sach_md.delete(req.body.Id).then(value => {
        res.redirect('/sach/list');
  }).catch(err => {
    console.log(err);
});
});
router.post('/edit', (req, res) => {
    sach_md.update(req.body).then(value => {
        res.redirect('/sach/list');
    });
});

module.exports=router;