var express = require('express');
var TK_md=require("../models/QLTK");
var router = express.Router();
var LoginController = require("../controllers/LogIn");
var middleware = require("../../config/middleward");
var bcrypt = require('bcrypt-nodejs');
router.get('/',middleware.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', middleware.LoggedAdmin, LoginController.adminLogin);


router.get('/taikhoan',middleware.isAdminAccess,(req,res) =>{
  if (req.session.user)
        res.render('admin', {
            layout: 'main',
            user: req.user,
            message: req.flash('message')[0]
        });
    else
        res.redirect('/QLTK');
})

router.get('/list', (req, res) => {
  console.log(req.user);
 TK_md.loadAll().then(rows => {
  var vm = {
   thuthu:rows,
   user: req.user,
   error: req.flash('error')
 };
 res.render('QLTK/taikhoan',vm);
});
});
// router.get('/editP',(req,res)=>{
//   res.render('QLTK/Edit');
// });
// router.post('/editP',(req,res)=>{
//   TK_md.update(req.body).then(value => {
//     res.redirect('/QLTK/list');
//   });
// });
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
   res.redirect('/QLTK/list');
 });
});

router.post('/delete', (req, res) => {
  TK_md.delete(req.body.Id).then(value => {
    res.redirect('/QLTK/list');
  }).catch(err => {
   req.flash('error', 'Thao tác không thành công!!!');
   res.redirect('/QLTK/list');
 });
});
// router.post('/edit', (req, res) => {
//   TK_md.update(req.body).then(value => {
//     res.redirect('/QLTK/list');
//   });
// });
// router.post('/editTK', (req, res) => {
//   TK_md.getById(req.body.Id)
//   .then(result => {
//     res.send(result)
//   })
// });



module.exports=router;