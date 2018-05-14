var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
var DocGiaController = require('../app/controllers/DocGiaController')
var SachController = require('../app/controllers/SachController')
module.exports = (app) => {
	app.get('/', (req, res) => {
		var vm = {
			layout: false,
		};
		res.render('login',vm)
	})

	app.use('/TheLoai', TheLoaiController);
	app.use('/NXB', NXBController);
	app.use('/DocGia', DocGiaController);
	app.use('/Sach', SachController);
} 
