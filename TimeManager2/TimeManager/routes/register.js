var express = require('express');
var router = express.Router();
var mysql = require('../lib/mysql.js');
var async = require('async')
/* GET users listing. */
router.get('/', function(req, res, next) {
	// res.send('respond with a resource');
	var registerinfo = {
			username	: "ya445cl6348231667",
			password	: "mumudev",
			email		: "mumu16963734dev41876@163.com",
			isExist		: 1
	};
	// if()
	var queryString = 'select * from user where username = "'+registerinfo.username
			+ '" or email = "' + registerinfo.email + '"';
	var isExist = 1,mvals,mfields;
	mysql(queryString,function(qerr,vals,fields){
		if(JSON.stringify(vals) == "[]"){
			registerinfo.isExist = 0;
		}
		register(res,registerinfo);
	});
});
function register(res,registerinfo) {
	var restring = {};
	console.log("isExist = " + registerinfo.isExist);
	if(registerinfo.isExist == 0 || registerinfo.isExist == null){
		mysql("INSERT INTO `user` (`user_id`, `username`, `email`, `password`, `ico`) VALUES (NULL, '"+
			registerinfo.username+"', '"+registerinfo.email+"', '"+registerinfo.password+"', NULL)",
			function(qerr,vals,fields){
				console.log(vals);
				if(vals.affectedRows == 1){
					restring = {
					status		: 1,
					username	:registerinfo.username,
					id 			:vals.insertId,
					msg			: "Register success!"
					};
				}else{
					restring = {
						status	: 0,
						msg		: "Register error!"
					};			
				}
				res.contentType('json');//返回的数据类型
				res.end(JSON.stringify(restring));
			})
	}else{
		restring = {
			status	: 0,
			msg		: "Register error!"
		};
		res.contentType('json');//返回的数据类型
		res.end(JSON.stringify(restring));
	}
}

module.exports = router;
