var express = require('express');
var MuonTra_md=require("../models/MuonTra");
var sach_md=require("../models/Sach");
var theloai_md = require('../models/TheLoai');
var DG_md=require('../models/DocGia');
var QuyDinh_md=require('../models/QuyDinh');
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
      user: req.user,
      error: req.flash('error')
    })
  })
});
router.post('/list', function(req, res){
  var now = moment().format('YYYY/MM/DD');
  QuyDinh_md.getById(4).then(value=>{
    QD = value[0].GiaTri2;
    QD1 = value[0].GiaTri1;
    muontra={
      'docgia':req.body.madocgia,
      'sach':req.body.masach,
      'soluong':1,
      'ngaymuon': now,
      'hantra': moment().add(QD, 'days').format('YYYY/MM/DD')
    }
    return DG_md.getById(muontra.docgia);
  }).then(value =>{
    if (moment().format('YYYY-MM-DD') > value.HanThe)
    {
      req.flash('error', 'Thẻ thư viện đã hết hạn!!!');
      res.redirect('/MuonTra/list');
    }
    else{
      sach_md.loadById(muontra.sach).then(value=>{
        if (value.SoLuong <1){
          req.flash('error', 'Sách đã được mượn!!!');
          res.redirect('/MuonTra/list');
        }
        else{
          MuonTra_md.count(muontra.docgia).then(value=>{
            if(value.SL <QD1){
              MuonTra_md.add(muontra).then(results => {
                return sach_md.updateSL(muontra);
              })
              .then(value => {
                res.redirect(req.get('referer'));
              }).catch(err => {
                req.flash('error', 'Thao tác không đúng!!!');
                res.redirect('/MuonTra/list');
              });
            }
            else{
              req.flash('error', 'Số sách bạn mượn vượt quá quy định!!!');
              res.redirect('/MuonTra/list');
            }
          })
        }
      }).catch(err => {
        req.flash('error', 'Mã sách không đúng!!!');
        res.redirect('/MuonTra/list');
      });
    }
  }).catch(err => {
   req.flash('error', 'mã độc giả không đúng!!!');
   res.redirect('/MuonTra/list');
 });
});
router.post('/delete', (req, res) => {
  var trasach={
    'id':req.body.Id,
    'sach':req.body.ten,
    'soluong':-1,
    'hantra': req.body.han
  }
  MuonTra_md.delete(trasach).then(results => {
     var day = new Date(moment(trasach.hantra,'DD/MM/YYYY')).getTime();
     console.log(day);
    var now = new Date(moment()).getTime();
    console.log(now);
    let d = Math.round((now - day)/(1000*60*60*24));
    if (d >0){
      req.flash('error', 'Độc giả trả sách quá hạn '+ d +' ngày!');
    }
    return sach_md.updateSL(trasach);
  })
  .then(value => {
    res.redirect('/MuonTra/list');
  }).catch(err => {
    req.flash('error', 'Thao tác không thành công!!!');
    res.redirect('/MuonTra/list');
  });
});
module.exports=router;