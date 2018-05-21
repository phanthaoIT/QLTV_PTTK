var express = require('express');
var DG_md=require("../models/DocGia");
var QuyDinh_md = require('../models/QuyDinh');
var moment = require('moment');
var router = express.Router();
router.get('/list', (req, res) => {
    DG_md.loadAll().then(rows => {
        var vm = {
         docgia:rows,
        error: req.flash('error')
       };
        res.render('DocGia/list',vm);
    });
});
router.post('/list', function(req, res){
         var now = moment().format('YYYY/MM/DD');
          QuyDinh_md.getById(1).then(value=>{
            QD = value[0].GiaTri3;
            var docgia={
          'ten':req.body.ten,
          'diachi':req.body.diachi,
           'ngaysinh':req.body.ngaysinh,
          'email':req.body.email,
           'gioitinh':req.body.gioitinh,
          'ngaylapthe':now,
          'hanthe': moment().add(QD, 'months').format('YYYY/MM/DD')
        }
        DG_md.add(docgia).then(value => {
          res.redirect(req.get('referer'));
        }).catch(err => {
              req.flash('error', 'Thao tác không thành công!!!');
              res.redirect('/DocGia/list');
        });
    })
});

router.post('/delete', (req, res) => {
    DG_md.delete(req.body.Id).then(value => {
        res.redirect('/DocGia/list');
  }).catch(err => {
    req.flash('error', 'Thao tác không thành công!!!');
    res.redirect('/DocGia/list');
});
});
router.post('/edit', (req, res) => {
    DG_md.update(req.body).then(value => {
        res.redirect('/DocGia/list');
    });
});
router.post('/editDG', (req, res) => {
    DG_md.getById(req.body.Id)
    .then(result => {
      res.send(result)
    })
});
module.exports=router;