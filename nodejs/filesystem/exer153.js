// write a Program to find to 20 pillindrome number in file name pillindrome.txt
var http = require("http");
const { url } = require("inspector");
var server = http.createServer(function (request, response) {
  if (request.url == "/pillindrom") {
    let array_number = number.split("");
    console.log(number);
    console.log(array_number);
    let length = array_number.length - 1;
    if (array_number[0] == array_number[length]) {
      console.log("it is pillindrom number :" + number);
    }
  }
});
server.listen(5000);
console.log("server is ready...");
