var express = require('express');
var theloai_md=require("../models/TheLoai");
var router = express.Router();
router.get('/list', (req, res) => {
    theloai_md.loadAll().then(rows => {
        var vm = {
           layout:'layout/main',
			theloai:rows
        };
        res.render('TheLoai/list', vm);
    });
});
router.post('/list', (req, res) => {
    var theloai={
       'ten': req.body
    }
    console.log(theloai.ten);
   // nxb_md.add(nxb).then(value => {
     //   res.redirect('NXB/list');
    //}).catch(err => {
      //  console.log(err);
    //});
});
module.exports=router;