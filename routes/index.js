var TheLoaiController = require('../app/controllers/TheLoaiController')
var NXBController = require('../app/controllers/NXBController')
var DocGiaController = require('../app/controllers/DocGiaController')
var SachController = require('../app/controllers/SachController')
var MuonTraController = require('../app/controllers/MuonTraController')
var TimKiemController = require('../app/controllers/TimKiemController')
var QuyDinhController = require('../app/controllers/QuyDinhController')
var QLTKController = require('../app/controllers/QLTKController')

module.exports = (app,passport) => {
	/*app.get('/', (req, res) => {
		
		res.render('TimKiem/list')
	});
	app.get('/login',function(req,res){
		res.render('login', {
			layout:false
		});

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
	app.use('/QLTK',QLTKController);
	app.use('/TheLoai', TheLoaiController);
	app.use('/NXB', NXBController);
	app.use('/DocGia', DocGiaController);
	app.use('/Sach', SachController);
	app.use('/MuonTra',MuonTraController);
	app.use('/TimKiem',TimKiemController);
	app.use('/QuyDinh',QuyDinhController);

} 

