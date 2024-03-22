var express= require("express");
var app = express();

app.get("/contactus" ,function(request,responce){
    responce.send("this is contactus page");

});

app.get("/login", function(request,responce){
    responce.send("this is login page");
});

app.get("/register", function(request,responce){
    responce.send("this is register page");
})

app.get("/changepassword",function(request,responce){
    responce.send("this is hsnge password page");
})

app.get("/forgotpassword",function(request,responce){
    responce.send(" this is forgot password page");
})

app.get("/profile",function(request,responce){
    responce.send("this is profile page");
})

app.listen(5000);
console.log("server is ready");
