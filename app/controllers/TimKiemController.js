var express = require('express');
var sach_md=require("../models/Sach");
var theloai_md = require('../models/TheLoai')
var router = express.Router();
router.get('/',(req,res)=>{
    res.render('TimKiem/list',{
      layout:false
    })
})
router.post('/', (req, res) => {
    let Sach, TheLoai;
    console.log(req.body.search);
    sach_md.search(req.body.search)
    .then(result => {
      Sach = result;
      return theloai_md.loadAll()
    })
    .then(result => {
      res.render('TimKiem/list', {
        sach: Sach,
        theloai: TheLoai,
        layout: false,
        kt: true
      })
    })

});
module.exports=router;