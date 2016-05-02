var express = require('express'); 
var app = express(); 
console.log("http://192.168.1.114:9999");
app.get('/', function(req, res){ 
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
    res.end();
    console.log(req);
}); 
app.get('/login', function(req, res){ 
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
    res.end();
    console.log(req);
}); 
app.post('/register', function(req, res, next) {
    console.log(req.body);//请求中还有参数data,data的值为一个json字符串
    console.log(req.body.PhoneNumber);//解析json格式数据
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
    res.end();
});
app.post('/getlesson', function(req, res, next) {
    console.log(req.body);//请求中还有参数data,data的值为一个json字符串
    console.log(req.body.PhoneNumber);//解析json格式数据
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
    res.end();
});
app.post('/getcategory', function(req, res, next) {
    console.log(req.body);//请求中还有参数data,data的值为一个json字符串
    console.log(req.body.PhoneNumber);//解析json格式数据
    res.contentType('json');//返回的数据类型
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
    res.end();
});
app.listen('9999');

