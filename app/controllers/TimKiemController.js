var express = require('express');
var sach_md=require("../models/Sach");
var theloai_md = require('../models/TheLoai')
var router = express.Router();
router.get('/list', (req, res) => {
    let Sach, TheLoai;
    sach_md.loadAll()
    .then(result => {
      Sach = result;
      return theloai_md.loadAll()
    })
    .then(result => {
      res.render('TimKiem/list', {
        sach: Sach,
        theloai: TheLoai
      })
    })

});
module.exports=router;