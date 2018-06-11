var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
var DocGiaController = require('../app/controllers/DocGiaController')
var SachController = require('../app/controllers/SachController')
var MuonTraController = require('../app/controllers/MuonTraController')
var TimKiemController = require('../app/controllers/TimKiemController')
var QuyDinhController = require('../app/controllers/QuyDinhController')
var QLTKController = require('../app/controllers/QLTKController')
var mw = require('../config/middleward')
var LogoutController = require("../app/controllers/Logout")


module.exports = (app,passport) => {
	app.use('/',TimKiemController);
	app.use('/QLTK',mw.isAdminAccess,QLTKController);
	app.use('/TheLoai',mw.isLoggedInAdmin,mw.isThuThuAccess, TheLoaiController);
	app.use('/NXB',mw.isLoggedInAdmin,mw.isThuThuAccess, NXBController);
	app.use('/DocGia',mw.isLoggedInAdmin,mw.isThuThuAccess, DocGiaController);
	app.use('/Sach',mw.isLoggedInAdmin,mw.isThuThuAccess, SachController);
	app.use('/MuonTra',mw.isLoggedInAdmin,mw.isThuThuAccess,MuonTraController);
	app.use('/TimKiem',TimKiemController);
	app.use('/QuyDinh',mw.isLoggedInAdmin,mw.isThuThuAccess,QuyDinhController);
	app.use('/logout', LogoutController)
}

