var express = require('express');
var MuonTra_md=require("../models/MuonTra");
var sach_md=require("../models/Sach");
var theloai_md = require('../models/TheLoai');
var DG_md=require('../models/DocGia');
var moment = require('moment');
var router = express.Router();
router.get('/list', (req, res) => {
  let Sach, TheLoai, DocGia,MuonTra;
  MuonTra_md.loadAll()
  .then(result => {
    MuonTra = result;
    return sach_md.loadAll()
  })
  .then(result => {
    Sach = result;
    return theloai_md.loadAll();
  }).then(result => {
    TheLoai = result;
    return DG_md.loadAll();
  })
  .then(result => {
    DocGia = result;
    res.render('MuonTra/muontra', {
      muontra:MuonTra,
      sach: Sach,
      theloai: TheLoai,
      docgia: DocGia,
    })
  })
});
router.post('/list', function(req, res){
  var now = moment().format('YYYY/MM/DD');
  var muontra={
    'docgia':req.body.madocgia,
    'sach':req.body.masach,
    'soluong':1,
    'ngaymuon': now,
  }
  MuonTra_md.add(muontra).then(results => {
        return sach_md.updateSL(muontra);
    })
  .then(value => {
    res.redirect(req.get('referer'));
  }).catch(err => {
    console.log(err);
  });
});
router.post('/delete', (req, res) => {
  var trasach={
    'id':req.body.Id,
    'sach':req.body.ten,
    'soluong':-1
  }
  MuonTra_md.delete(trasach).then(results => {
    console.log(results);
        return sach_md.updateSL(trasach);
    })
  .then(value => {
    res.redirect('/MuonTra/list');
  }).catch(err => {
    console.log(err);
  });
});
module.exports=router;