var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
var DocGiaController = require('../app/controllers/DocGiaController')
var SachController = require('../app/controllers/SachController')
var MuonTraController = require('../app/controllers/MuonTraController')
var TimKiemController = require('../app/controllers/TimKiemController')
var QuyDinhController = require('../app/controllers/QuyDinhController')
var QLTKController = require('../app/controllers/QLTKController')
module.exports = (app) => {
	app.get('/', (req, res) => {
		var vm = {
			layout: false,
		};
		res.render('login',vm)
	})
	app.get('/home',(req,res)=>{
		res.render('home')
	})
	app.use('/TheLoai', TheLoaiController);
	app.use('/NXB', NXBController);
	app.use('/DocGia', DocGiaController);
	app.use('/Sach', SachController);
	app.use('/MuonTra',MuonTraController);
	app.use('/TimKiem',TimKiemController);
	app.use('/QuyDinh',QuyDinhController);
	app.use('/QLTK',QLTKController);
} 
