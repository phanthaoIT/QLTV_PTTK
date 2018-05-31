var passport = require('passport')

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
                return res.redirect('/login')
            }
            if(!user){
                return res.redirect('/login')
            }
            req.logIn(user, err=>{
                if(err) return console.log(err)
                  
                    req.session.user = user;
                    if (req.body.remember) {
                        req.session.cookie.originalMaxAge = 1000 * 60 * 3;
                    }
                    else
                        req.session.cookie.originalMaxAge = false;
                return res.redirect('QLTK/taikhoan')
            })

        })(req,res)
    },

    adminLogout: (req,res)=>{
        req.logout();
        if(!req.session.cookie.expires)
            req.session.destroy();
        res.redirect('/login');
    },

    logout: (res,req,next) =>{
        req.logout();
        req.session= {}
        res.redirect('/');
    }

}


module.exports = LogInController;