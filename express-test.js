var express = require('express');
var app = express();

//请求响应语句
app.get('/',function(req,res){
   var appinfor = req.baseUrl;
   console.log("%s",appinfor);
   res.send('hello express...2');

});

//服务器
var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("http://%s:%s",host,port);
});



