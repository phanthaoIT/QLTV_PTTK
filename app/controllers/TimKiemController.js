var express = require('express');
var TK = require('../models/TimKiem')
var router = express.Router();
router.get('/list', (req, res) => {
    res.render('TimKiem/list')
});

module.exports=router;