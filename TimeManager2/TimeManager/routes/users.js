var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.contentType('json');//返回的数据类型
  res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
  res.end();
  console.log(req);
});

module.exports = router;
