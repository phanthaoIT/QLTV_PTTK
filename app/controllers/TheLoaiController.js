var express = require('express');
var router = express.Router();
var theloai_md=require("../models/TheLoai");
router.get("/list",function(req,res){
	theloai_md.loadAll().then(rows=>{
		var data = {
			layout:'./layout/main',
			theloai_md:rows
		};
		res.render("./TheLoai/list",data);
	});
});
router.get('/',function(req,res){
		res.render("login");
});
router.get('/list',function(req,res){
	res.render("list");
});
router.get('/add',function(req,res){
	res.render("add");
});
router.get('/edit',function(req,res){
	res.render("edit");
});
module.exports=router;