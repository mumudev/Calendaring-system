var express = require('express');
var router = express.Router();
var mysql = require('../lib/mysql.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  var username = "ycl";
  var password = "mumudev";
  // if()
  var queryString = 'select * from user where username = "'+username
  		+ '" and password = "' + password + '"';
  res.contentType('json');//返回的数据类型
  mysql(queryString,function(qerr,vals,fields){
        // console.log(qerr);
  		// console.log(vals);
  		// console.log(fields);
  		login(res,vals);
  });

});
var login = function(res,vals) {
	var restring = {};
	if(vals.length >= 1){
		restring = {
		status		: 1,
		username	: vals[0].username,
		id 			: vals[0].user_id,
		msg			: "login success!"
		};
	}else{
		restring = {
			status	: 0,
			msg		: "login error!"
		};
	}
	res.end(JSON.stringify(restring));
}

module.exports = router;
