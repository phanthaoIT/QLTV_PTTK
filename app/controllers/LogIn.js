var passport = require('passport')
var middleware = require("../../config/middleward");

var LogInController = {
    formAdminLogin: (req,res)=>{
        res.render('login',{
            layout:false,
            message: req.flash('loginMessage'),

        })
    },

    adminLogin: (req,res)=>{
        passport.authenticate('local-login', (err,user,info)=>{
            if(err){
                return res.redirect('/QLTK')
            }
            if(!user){
                return res.redirect('/QLTK')
            }
            req.logIn(user, err=>{
                if(err) return console.log(err)
                    req.session.user = user;
                if (req.body.remember) {
                    req.session.cookie.originalMaxAge = 1000 * 60 * 3;
                }
                else
                    req.session.cookie.originalMaxAge = false;
                if(user.Quyen == 2){
                    return res.redirect('QLTK/taikhoan')
                }
                else if(user.Quyen==1)
                {
                     var vm={
                    user: req.user,
                    }
                    return res.render('home',vm)
                }
            })

        })(req,res)
    },

    adminLogout: (req,res)=>{
        req.logout();
        if(!req.session.cookie.expires)
            req.session.destroy();
        res.redirect('/')
    },

    logout: (req,res,next) =>{
        req.logout();
        req.session= {}
        res.render('/');
    }

}

module.exports = LogInController;