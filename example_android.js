//用来检测http请求专用
//TODO：做个端口输入
var http = require('http');  
var server = http.createServer();  
var querystring = require('querystring');  
  
  
var postResponse = function(req, res) {  
    var info ='';  
    req.addListener('data', function(chunk){  
        info += chunk;  
     })  
    .addListener('end', function(){  
        info = querystring.parse(info);  
        res.setHeader('content-type','text/html; charset=UTF-8');//响应编码  
        res.end('Hello World POST ' + info.name,'utf8');  
     })   
console.log('postResponse'); 
}  
  
var getResponse = function (req, res){  
  res.writeHead(200, {'Content-Type': 'text/plain'});  
  var name = require('url').parse(req.url,true).query.name  
  res.end('Hello World GET ' + name,'utf8');   
console.log('getResponse'); 
}  
  
var requestFunction = function (req, res){  
    req.setEncoding('utf8');//请求编码  
  
    if (req.method == 'POST'){  
        return postResponse(req, res);  
    }  
  
    return getResponse(req, res);   
console.log('requestFunction'); 
}  
  
server.on('request',requestFunction);  
server.listen(8080, "192.168.1.100");  
  
console.log('Server running at http://192.168.1.100:8080/'); 
