var http= require('http');
var server= http.createServer(function(request,responce){
       responce.writeHead(200,{'content-type':'text/html'});

        Console.log(request.url);
        fs.readfile('color.txt',function(error,data){
            console.log(data);
            console.log("file readed successfully.. ");
            responce.write(data);
            responce.end();

        });

});

server.listen(5000);
console.log("server is ready..");