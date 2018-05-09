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
module.exports=router;