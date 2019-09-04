var express = require('express');
var http = require('http');

var app  = express();

app.use(function (req, res){

});

http.createServer(app).listen(3000);