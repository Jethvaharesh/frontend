var http= require("http");
var server= http.createServer(function(request,responce){
  
    console.log(request.url);
    responce.writeHead(200,{'content-type': 'text/html'});
    responce.write("success");
    responce.end();

});
server.listen(5000);
console.log("server is ready");
