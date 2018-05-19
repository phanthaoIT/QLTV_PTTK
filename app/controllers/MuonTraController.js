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
router.post('/muon', function(req, res){
        var now = moment().format('YYYY/MM/DD');
        var muontra={
          'docgia':req.body.madocgia,
          'sach':req.body.masach,
          'soluong':req.body.soluong,
          'ngaymuon': now,
        }
    MuonTra_md.add(muontra).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        console.log(err);
    });
});

module.exports=router;