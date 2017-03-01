var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>hello nodejs good man  </h1>');
	res.end('<h2>lxd</h2>');

}).listen(3000);

console.log(' the nodejs server is running at port 3000 ......');

