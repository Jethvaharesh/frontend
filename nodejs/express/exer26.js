// Write a programe to accpet input from user using get method and peform addition of 2 number 
var express = require('express');
var app=express();

app.get("/addition/:number1/:number2",function(request,responce){
    let number1= request.params.number1;
    let number2= request.params.number2;
    let addition= parseInt(number1) + parseInt(number2);

    responce.send(`Given  Number First ${number1} and Second ${number2}   Addition is ${addition}`);
});
app.listen(5000);
console.log("server is ready");