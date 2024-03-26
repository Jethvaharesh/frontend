// Write a programe to findout wether the given number is odd or even 
var express=require("express");
var app=express();

app.get("/weather/:number",function(request,responce){
   let number= request.params.number;

   if (number %2 == 0)
   {
    responce.send(`Number ${number} is Even`)
   }
   else
   {
    responce.send(`Number ${number} is Odd`)
   }

});
app.listen(5000);
console.log("server is ready");
