var express = require('express');
var DG_md=require("../models/DocGia");
var QuyDinh_md = require('../models/QuyDinh');
var moment = require('moment');
var router = express.Router();
router.get('/list', (req, res) => {
  DG_md.loadAll().then(rows => {
    var vm = {
     docgia:rows,
      user: req.user,
     error: req.flash('error')
   };
   res.render('DocGia/list',vm);
 });
});
router.post('/list', function(req, res){
 let now = moment().format('YYYY/MM/DD');
 QuyDinh_md.getById(1).then(value=>{
  QD1 = value[0].GiaTri1;
  QD2 = value[0].GiaTri2;
  QD3 = value[0].GiaTri3;;
  var docgia={
    'ten':req.body.ten,
    'diachi':req.body.diachi,
    'ngaysinh':req.body.ngaysinh,
    'email':req.body.email,
    'gioitinh':req.body.gioitinh,
    'ngaylapthe':now,
    'hanthe': moment().add(QD3, 'months').format('YYYY/MM/DD')
  }
  var tuoi = moment().year()-docgia.ngaysinh.slice(0,4);
  if(tuoi<QD1 ||tuoi >QD2){
    req.flash('error', 'nằm ngoài độ tuổi cho phép!!!');
    res.redirect('/DocGia/list');
  }
  else{
    DG_md.add(docgia).then(value => {
      res.redirect(req.get('referer'));
    }).catch(err => {
      req.flash('error', 'Thao tác không thành công!!!');
      res.redirect('/DocGia/list');
    });
  }
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