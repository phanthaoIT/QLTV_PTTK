var express = require('express');
var TK_md=require("../models/QLTK");
var router = express.Router();
var LoginController = require("../controllers/LogIn");
var middleware = require("../../config/middleward");
var home = require("../models/Home");
var bcrypt = require('bcrypt-nodejs');
router.get('/',middleware.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', middleware.LoggedAdmin, LoginController.adminLogin);


router.get('/dashboard',middleware.isAdminAccess,(req,res) =>{
  console.log(req.session.user);
  if (req.session.user)
    res.render('admin', {
      layout: 'main',
      user: req.user,
      message: req.flash('message')[0]
    });
  else
    res.redirect('/admin');
})
router.get('/home',middleware.isThuThuAccess,(req,res) =>{
  if (req.session.user)
    home.load().then(rows => {
      var vm ={
        layout: 'main',
        user: req.user,
        message: req.flash('message')[0],
        sach:rows[0][0].sach,
        docgia:rows[1][0].docgia,
        muontra:rows[2][0].muontra,
        nxb:rows[3][0].nxb,
        theloai:rows[4][0].theloai,
      }
      res.render('home',vm);
    });
  else
    res.redirect('/admin');
})
router.get('/list', (req, res) => {
 if (req.session.user)
   TK_md.loadAll().then(rows => {
    var vm = {
     thuthu:rows,
     user: req.user,
     error: req.flash('error')
   };
   res.render('QLTK/taikhoan',vm);
 });
 else
  res.redirect('/admin');
});
router.post('/list', function(req, res){
  var password = bcrypt.hashSync(req.body.pass, null,null);
  var thuthu={
    'ten':req.body.ten,
    'email':req.body.email,
    'sdt':req.body.sdt,
    'ngaysinh':req.body.ngaysinh,
    'gioitinh':req.body.gioitinh,
    'username':req.body.username,
    'pass':password,
  }
  TK_md.add(thuthu).then(results =>{
    res.redirect(req.get('referer'));
  }).catch(err => {
   req.flash('error', 'Thao tác không thành công!!!');
   res.redirect('/admin/list');
 });
});
router.post('/delete', (req, res) => {
  TK_md.delete(req.body.Id).then(value => {
    res.redirect('/admin/list');
  }).catch(err => {
   req.flash('error', 'Thao tác không thành công!!!');
   res.redirect('/admin/list');
 });
});
router.get('/TaiKhoan',(req,res)=>{
 if (req.session.user)
  TK_md.getById(req.user.IdThuThu)
.then(results => {
  res.render('QLTK/Edit', {
    layout: 'main',
    user: req.user,
    profile: results
  })
})
else
  res.redirect('/admin');
});
router.post('/TaiKhoan',(req,res)=>{
  TK_md.update(req.body).then(value => {
    res.redirect('/admin/TaiKhoan');
  });
});
router.get('/DoiMatKhau',(req,res)=>{
  if (req.session.user)
    res.render('QLTK/DoiPass', {
      layout: 'main',
      user:req.user,
    })
  else
    res.redirect('/admin');
});
router.post('/DoiMatKhau',(req,res,done)=>{
  if (!bcrypt.compareSync(req.body.cu,req.user.Pass))
  {
    res.render('QLTK/DoiPass',{message:"Mật khẩu không đúng!",user:req.user})
  }
  else
    if (req.body.moi!=req.body.remoi){
    res.render('QLTK/DoiPass',{message:"Mật khẩu khác nhau!",user:req.user})
    }
    else{
     var password = bcrypt.hashSync(req.body.moi, null,null);
     TK_md.updateacc(password,req.user.Username).then(value=>{
     res.redirect('/logout');
    });
   }
 });

module.exports=router;