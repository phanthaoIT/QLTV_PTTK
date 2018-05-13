var express = require('express');
var DG_md=require("../models/DocGia");
var router = express.Router();
router.get('/list', (req, res) => {
    DG_md.loadAll().then(rows => {
        var vm = {
         docgia:rows,
       };
        res.render('DocGia/list',vm);
    });
});
router.post('/list', function(req, res){
        var docgia={
          'ten':req.body.ten,
          'diachi':req.body.diachi,
           'ngaysinh':req.body.ngaysinh,
          'email':req.body.email,
           'gioitinh':req.body.gioitinh,
          'ngaylapthe':req.body.ngaylapthe,
        }
    DG_md.add(docgia).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        console.log(err);
    });
});

router.post('/delete', (req, res) => {
    DG_md.delete(req.body.Id).then(value => {
        res.redirect('/DocGia/list');
  }).catch(err => {
    console.log(err);
});
});
router.post('/edit', (req, res) => {
    DG_md.update(req.body).then(value => {
        res.redirect('/DocGia/list');
    });
});

module.exports=router;