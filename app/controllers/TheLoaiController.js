var express = require('express');
var theloai_md=require("../models/TheLoai");
var router = express.Router();
router.get('/list', (req, res) => {
    theloai_md.loadAll().then(rows => {
        var vm = {
         layout:'layout/main',
         theloai:rows,
       };
        res.render('TheLoai/list', vm);
    });
});
router.post('/list', function(req, res){
        var theloai={
          'ten':req.body.ten
        }
    theloai_md.add(theloai).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        console.log(err);
    });
});

router.post('/delete', (req, res) => {
    theloai_md.delete(req.body.Id).then(value => {
        res.redirect('/TheLoai/list');
  }).catch(err => {
    console.log(err);
});
});
router.post('/edit', (req, res) => {
    theloai_md.update(req.body).then(value => {
        res.redirect('/TheLoai/list');
    });
});

module.exports=router;