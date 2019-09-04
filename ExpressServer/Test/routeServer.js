var express = require ('express');
var http = require('http');

var app = express();

app.get('/', function(req , res){
    res.send('base');
});

app.get('/start' , function (req, res){
    res.send('start');
});

app.get('/show' , function (req , res){
    res.send('show');
});


app.get('/page/:id' , function (req, res){
    res.send(req.params.id + '페이지');
})

var path = './';
app.use(reload(path));

http.createServer(app).listen(3000);