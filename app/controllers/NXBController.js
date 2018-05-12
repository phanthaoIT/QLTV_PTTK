var express = require('express');
var nxb_md=require("../models/NXB");
var router = express.Router();
router.get('/list', (req, res) => {
    nxb_md.loadAll().then(rows => {
        var vm = {
           layout:'layout/main',
			nxb:rows,
       // Id: req.query.Id
        };
        res.render('NXB/list', vm);
    });
});
/*router.post('/list', function(req, res){
        var nxb={
          'ten':req.body.ten
        }
    nxb_md.add(nxb).then(value => {
        res.redirect(req.get('referer'));
    }).catch(err => {
        console.log(err);
    });
});*/
/*router.get('/list', (req, res) => {
    var vm = {
        TenNXB: req.query.id
    }
    res.render('NXB/list', vm);
});*/

/*router.post('/list', (req, res) => {
    nxb_md.delete(req.body.Id).then(value => {
        res.redirect('/NXB');
    });
});*/
router.get('/delete', (req, res) => {
    var vm = {
        Id: req.query.id
    }
     console.log(req.query.Id);
    res.render('NXB/delete', vm);
});

router.post('/delete', (req, res) => {
    nxb_md.delete(req.body.Id).then(value => {
        res.redirect('/NXB/list');
    });
});
module.exports=router;