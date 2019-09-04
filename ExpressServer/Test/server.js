var express = require('express');
var app = express();



app.use(function(req, res){
    // res.writeHead(200 , {'Content-Type' : 'text/html; charset=utf-8' });
    // res.end('Express server');
    var name = req.query.name;
    res.send('name : ' + name ) ;

}).listen(3000);

