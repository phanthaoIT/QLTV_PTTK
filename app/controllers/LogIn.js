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
                return res.redirect('/admin')
            }
            if(!user){
                return res.redirect('/admin')
            }
            req.logIn(user, err=>{
                if(err) return console.log(err)
                    req.session.user = user;
                req.session.cookie.originalMaxAge = 1000 * 60 * 60;
                if(user.Quyen == 2){
                    return res.redirect('admin/dashboard')
                }
                else if(user.Quyen==1)
                {
                    return res.redirect('admin/home')
                }
            })

        })(req,res)
    },

    adminLogout: (req,res)=>{
        req.logout();
        req.session.destroy();
        res.redirect('/');
    },

    logout: (req,res,next) =>{
        req.logout();
        req.session.destroy();
        res.redirect('/');
    }

}

module.exports = LogInController;