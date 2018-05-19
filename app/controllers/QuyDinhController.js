var express = require('express');
var QD_md=require("../models/QuyDinh");
var router = express.Router();
router.get('/list', (req, res) => {
	QD_md.loadAll().then(rows => {
		var vm = {
			GiaTri1:rows[0].GiaTri1,
			GiaTri2:rows[0].GiaTri2,
			GiaTri3:rows[0].GiaTri3,
			GiaTri4:rows[1].GiaTri1,
			GiaTri5:rows[2].GiaTri1,
			GiaTri6:rows[2].GiaTri2
		};
		console.log(vm);
		res.render('QuyDinh/list', vm);
	});
});
module.exports=router;