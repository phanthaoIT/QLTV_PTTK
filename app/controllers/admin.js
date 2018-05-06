var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
	res.json({"message":"This is admin page"});
});
router.get('/login',function(req,res){
	 var vm = {
        layout: false
    };
	res.render("login");
});
module.exports=router;