var LocalStrategy   = require('passport-local').Strategy;
var mysql = require('./mysql');
var bcrypt = require('bcrypt-nodejs');
module.exports = (passport) => {
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true,
    },
    function(req, username, password, done) { 
         mysql.query("SELECT * FROM `taikhoan` WHERE `Username` = '" + username + "'",function(err,rows){
            if (err)
                return done(err);
            if (!rows.length)
                return done(null, false, req.flash('loginMessage', 'Không có tài khoản này.')); 
            if (!bcrypt.compareSync(password,rows[0].Pass))
                return done(null, false, req.flash('loginMessage', 'sai mật khẩu.'));
            return done(null, rows[0]);         
    });
    }));
    passport.deserializeUser(function(id, done) {
        done(null,id);
    });
};