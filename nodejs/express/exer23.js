// -> https://www.npmjs.com/package/qrcode
// Write a nodejs programe to qr code which has data link
// ->https://github.com/parampatel07/frontend27/

// Write a programe in express js to create 5 pages  
//  post->login  -> green , white  
//  post->register -> red , white  
//  get->change password -> blue , white  
//  put->Forgot password  -> yellow , black  
//  delete->Profile -> orange , black

var Qrcode = require("qrcode");
var express = require("express");
var app = express();



app.post("/logim", function (request, responce) {
    responce.send("this is login page")
});

app.post("/register", function (request, responce) {
    responce.send("this is register page");
});

app.get("/changepassword", function (request, responce) {
    responce.send("this is change password page");
});

app.put("/forgotpassword", function (request, responce) {
    responce.send("this is forget password page");
});

app.delete("/profile", function (request, responce) {
    responce.send("this is profile page");
})

Qrcode.toFile('login.png', 'This is login Page', {
    color: {
        dark: '#008000',  // green dots
        light: '#FFFFFF' // white background
    }
}, function (err) {
    if (err) throw err
    console.log('login.png is done')
});

Qrcode.toFile('register.png', 'this is register page', {
    color: {
        dark: '#FF0000',//red dots
        light: '#FFFFFF'//white background
    }
}, function (err) {
    if (err) throw err
    console.log('register.png is done')
});

Qrcode.toFile('changepassword.png', 'this is changepassword page', {
    color: {
        dark: '#0000FF',//blue dots
        light: '#FFFFFF'//white background
    }
}, function (err) {
    if (err) throw err
    console.log("changepassword.png is done")
});

Qrcode.toFile('forgotpassword.png', 'this is forgotpassword page', {
    color: {
        dark: '#FFFF00',//yellow dots
        light: '#FFFFFF'//white background
    }
}, function (err) {
    if (err) throw err
    console.log("forgotpassword.png is done")

});

Qrcode.toFile('profile.png', 'this is profile page', {
    color: {
        dark: '#FFA500', //orange dots
        light: '#000000'//black background
    }
}, function (err) {
    if (err) throw err
    console.log("profile.png is done");

})

app.listen(5000);
console.log("Server is ready..");