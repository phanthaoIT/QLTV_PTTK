var middleware = {
    isLoggedInAdmin: (req,res,next) =>{
        if(req.isAuthenticated())
            return next()
        res.redirect('/QLTK');
    },

    LoggedAdmin: (req,res,next) =>{
        if(!req.isAuthenticated())
            return next()
        return res.redirect('/QLTK/taikhoan');
    },

    isThuThuAccess: (req,res,next)=>{
        if(req.isAuthenticated()){
            if(req.user.Quyen!=1){
                return res.render('warning');
            }
        }
        next();
    },
    isAdminAccess: (req,res,next)=>{
        if(req.isAuthenticated()){
            if(req.user.Quyen!=2){
                return res.render('warning');
            }
        }
        next();
    }
}

module.exports = middleware;