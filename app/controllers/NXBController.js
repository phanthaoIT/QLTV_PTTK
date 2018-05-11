var express = require('express');
var nxb_md=require("../models/NXB");
var router = express.Router();
router.get('/list', (req, res) => {
    nxb_md.loadAll().then(rows => {
        var vm = {
           layout:'layout/main',
			nxb:rows
        };
        res.render('NXB/list', vm);
    });
});
router.post('/list', (req, res) => {
    nxb_md.add(req.body).then(value => {
        res.render('NXB/list');
    }).catch(err => {
        res.end('fail');
    });
});
module.exports=router;