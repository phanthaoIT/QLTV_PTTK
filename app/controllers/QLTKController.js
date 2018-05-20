var express = require('express');
var TK_md=require("../models/QLTK");
var router = express.Router();
router.get('/list', (req, res) => {
 TK_md.loadAll().then(rows => {
  var vm = {
   thuthu:rows,
 };
 res.render('QLTK/taikhoan',vm);
});
});
router.post('/list', function(req, res){
  var thuthu={
    'ten':req.body.ten,
    'email':req.body.email,
    'sdt':req.body.sdt,
    'ngaysinh':req.body.ngaysinh,
    'gioitinh':req.body.gioitinh,
    'username':req.body.username,
    'pass':req.body.pass,

  }
  TK_md.add(thuthu).then(results =>{
        return TK_md.addacc(thuthu);
  })
  .then(value => {
    res.redirect(req.get('referer'));
  }).catch(err => {
    console.log(err);
  });
});

router.post('/delete', (req, res) => {
  TK_md.delete(req.body.Id).then(value => {
    res.redirect('/QLTK/list');
  }).catch(err => {
    console.log(err);
  });
});
router.post('/edit', (req, res) => {
  TK_md.update(req.body).then(value => {
    res.redirect('/QLTK/list');
  });
});
router.post('/editTK', (req, res) => {
  TK_md.getById(req.body.Id)
  .then(result => {
    res.send(result)
  })

});
module.exports=router;