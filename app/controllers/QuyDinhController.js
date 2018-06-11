var express = require('express');
var QD_md=require("../models/QuyDinh");
var router = express.Router();
router.get('/list', (req, res) => {
	QD_md.loadAll().then(rows => {
		var vm = {
			 user: req.user,
			Id1 : rows[0].Id,
			GiaTri1:rows[0].GiaTri1,
			GiaTri2:rows[0].GiaTri2,
			GiaTri3:rows[0].GiaTri3,
			Id2 : rows[1].Id,
			GiaTri4:rows[1].GiaTri1,
			Id3 : rows[2].Id,
			GiaTri5:rows[2].GiaTri1,
			GiaTri6:rows[2].GiaTri2,
          error: req.flash('error')
		};
		res.render('QuyDinh/list', vm);
	});
});
router.post('/list', (req, res) => {
	console.log(req.body);
     QD_md.update(req.body).then(value => {
         res.redirect('/QuyDinh/list');
     });
});
module.exports=router;