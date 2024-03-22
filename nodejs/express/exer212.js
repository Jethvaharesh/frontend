var Qrcode= require('qrcode');

 Qrcode.toDataURL('https://github.com/parampatel07/frontend27/', {type:'terminal'}, function(error,url){

 console.log(url);
 })