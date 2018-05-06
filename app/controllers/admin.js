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
router.get('/list',function(req,res){
	 var vm = {
        layout: false
    };
	res.render("list");
});
router.get('/add',function(req,res){
	 var vm = {
        layout: false
    };
	res.render("add");
});
router.get('/edit',function(req,res){
	var vm = {
        layout: false
    };
	res.render("edit");
});
module.exports=router;