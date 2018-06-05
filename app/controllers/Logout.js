var LoginController = require('./LogIn')
var express = require("express")
var router = express.Router()


router.get('/',LoginController.adminLogout)

module.exports = router;