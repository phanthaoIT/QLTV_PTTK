var middleware = {
    isLoggedInAdmin: (req,res,next) =>{
        if(req.isAuthenticated())
            return next()
        res.redirect('/admin/home');
    },

    LoggedAdmin: (req,res,next) =>{
        if(!req.isAuthenticated())
            return next()
        return res.redirect('/admin/dashboard');
    },
    isThuThuAccess: (req,res,next)=>{
        if(req.isAuthenticated()){
            if(req.user.Quyen!=1){
                return res.render('warning',{user: req.user});
            }
        }
        next();
    },
    isAdminAccess: (req,res,next)=>{
        if(req.isAuthenticated()){
            if(req.user.Quyen!=2){
                return res.render('warning',{user: req.user});
            }
        }
        next();
    }
}

module.exports = middleware;