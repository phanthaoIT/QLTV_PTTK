var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
var DocGiaController = require('../app/controllers/DocGiaController')
var SachController = require('../app/controllers/SachController')
var MuonTraController = require('../app/controllers/MuonTraController')
var TimKiemController = require('../app/controllers/TimKiemController')
var QuyDinhController = require('../app/controllers/QuyDinhController')
var QLTKController = require('../app/controllers/QLTKController')
var AuthorController =  require("../app/controllers/AuthorController")
var mw = require('../config/middleward')

module.exports = (app,passport) => {
	app.get('/', (req, res) => {
		var vm ={
			layout:false
		}
		res.render('TimKiem/list',vm)
	});
	


	/*app.post('/login',(req,res)=> passport.authenticate('local-login', (err,user,info) =>{
		if(err) 
			return res.redirect('/login');
		if(!user)
			return res.redirect('/login');
		req.logIn(user, err => {
			if(err)
				return console.log(err);
			return res.redirect('/admin');
		}) 


	})(req,res)/*,
	function(req, res) {
        console.log("hello");

        if (req.body.remember) {
	       req.session.cookie.maxAge = 1000 * 60 * 3;
	    } else {
	       req.session.cookie.expires = false;
	     }
	res.redirect('/');
);

app.get('/admin',function(req,res){
	res.render('NXB/list');
})*/
	app.use('/QLTK',mw.isAdminAccess,QLTKController);
	app.use('/home',mw.isLoggedInAdmin,mw.isThuThuAccess, AuthorController);
	app.use('/TheLoai',mw.isLoggedInAdmin,mw.isThuThuAccess, TheLoaiController);
	app.use('/NXB',mw.isLoggedInAdmin,mw.isThuThuAccess, NXBController);
	app.use('/DocGia',mw.isLoggedInAdmin,mw.isThuThuAccess, DocGiaController);
	app.use('/Sach',mw.isLoggedInAdmin,mw.isThuThuAccess, SachController);
	app.use('/MuonTra',mw.isLoggedInAdmin,mw.isThuThuAccess,MuonTraController);
	app.use('/TimKiem',mw.isLoggedInAdmin,mw.isThuThuAccess,TimKiemController);
	app.use('/QuyDinh',QuyDinhController);

} 

