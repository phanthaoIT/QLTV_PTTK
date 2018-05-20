var express = require('express');
var sach_md=require("../models/Sach");
var theloai_md = require('../models/TheLoai.js')
var nxb_md = require('../models/NXB.js')
var moment = require('moment');
var router = express.Router();
router.get('/list', (req, res) => {
    let Sach, TheLoai, NXB;
    sach_md.loadAll()
    .then(result => {
      Sach = result;
      return theloai_md.loadAll()
    })
    .then(result => {
      TheLoai = result;
      return nxb_md.loadAll();
    })
    .then(result => {
      NXB = result;
      res.render('sach/list', {
        sach: Sach,
        theloai: TheLoai,
        nxb: NXB,
        error: req.flash('error')
      })
    })

});
router.post('/list', function(req, res){
   var now = moment().format('YYYY/MM/DD');
        var sach={
          'ten':req.body.ten,
          'tacgia':req.body.tacgia,
          'ngaynhap':now,
          'namxb':req.body.namxb,
          'soluong':req.body.soluong,
          'idtheloai':req.body.idtheloai,
          'idnxb':req.body.idnxb,
        }
    sach_md.add(sach).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        req.flash('error', 'Thao tác không thành công!!!');
        res.redirect('/Sach/list');
    });
});

router.post('/delete', (req, res) => {
    sach_md.delete(req.body.Id).then(value => {
        res.redirect('/sach/list');
  }).catch(err => {
       req.flash('error', 'Thao tác không thành công!!!');
        res.redirect('/Sach/list');
});
});
router.post('/edit', (req, res) => {
 
     sach_md.update(req.body).then(value => {
         res.redirect('/sach/list');
     });
});

router.post('/editbook', (req, res) => {
    sach_md.loadById(req.body.Id)
    .then(result => {
      res.send(result)
    })
     
});
module.exports=router;