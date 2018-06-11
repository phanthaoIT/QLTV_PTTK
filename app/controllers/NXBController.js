var express = require('express');
var nxb_md=require("../models/NXB");
var router = express.Router();
router.get('/list', (req, res) => {
    nxb_md.loadAll().then(rows => {
        var vm = {
         nxb:rows,
          user: req.user,
        error: req.flash('error')
       };
        res.render('NXB/list', vm);
    });
});
router.post('/list', function(req, res){
        var nxb={
          'ten':req.body.ten
        }
    nxb_md.add(nxb).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        req.flash('error', 'Thao tác không thành công!!!');
        res.redirect('/NXB/list');
    });
});

router.post('/delete', (req, res) => {
    nxb_md.delete(req.body.Id).then(value => {
        res.redirect('/NXB/list');
  }).catch(err => {
     req.flash('error', 'Thao tác không thành công!!!');
    res.redirect('/NXB/list');
});
});
router.post('/edit', (req, res) => {
    nxb_md.update(req.body).then(value => {
        res.redirect('/NXB/list');
    });
});

module.exports=router;