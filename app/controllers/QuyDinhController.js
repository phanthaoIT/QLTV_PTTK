var express = require('express');
var DG_md=require("../models/QuyDinh");
var router = express.Router();
router.get('/list', (req, res) => {
    res.render('QuyDinh/list');
});
module.exports=router;