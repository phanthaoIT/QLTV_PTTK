var express = require('express');
var router = express.Router();
var LoginController = require("../controllers/LogIn");
var middleware = require("../../config/middleward");

router.get('/',middleware.LoggedAdmin, LoginController.formAdminLogin);
router.post('/', middleware.LoggedAdmin, LoginController.adminLogin);


router.get('/',middleware.isThuThuAccess,(req,res) =>{
  if (req.session.user)
        res.render('admin', {
            layout: 'main',
            title: 'Admin Dashboard',
            user: req.user,
            message: req.flash('message')[0]
        });
    else
        res.redirect('/QLTK');
})

module.exports=router;