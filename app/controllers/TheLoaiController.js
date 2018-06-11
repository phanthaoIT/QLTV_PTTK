var express = require('express');
var theloai_md=require("../models/TheLoai");
var router = express.Router();
router.get('/list', (req, res) => {
    theloai_md.loadAll().then(rows => {
        var vm = {
           user: req.user,
         theloai:rows,
          error: req.flash('error')
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
        req.flash('error', 'Thao tác không thành công!!!');
        res.redirect('/TheLoai/list');
    });
});

router.post('/delete', (req, res) => {
    theloai_md.delete(req.body.Id).then(value => {
        res.redirect('/TheLoai/list');
  }).catch(err => {
    req.flash('error', 'Thao tác không thành công!!!');
        res.redirect('/TheLoai/list');
});
});
router.post('/edit', (req, res) => {
    theloai_md.update(req.body).then(value => {
        res.redirect('/TheLoai/list');
    });
});

module.exports=router;