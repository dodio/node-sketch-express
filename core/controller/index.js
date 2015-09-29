var router = module.exports = require("express").Router();


router.all("/",function(req,res) {
	res.send(res.data);
	res.end("hello")
})

