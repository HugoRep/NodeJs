// var fs = require ('fs');
var handler = require('./requestHandler');
var http = require('http');
var port = 3000;

function onResqponse(req , res){
    var pathname = req.url;

    if(pathname === '/') 
    {
        handler.start(req, res);
    }else if( pathname === '/favicon.ico'){
        handler.favicon(req , res );
    }
}

function startServer( port, handler)
{

}

var server = http.createServer(onResqponse).listen(port);

console.log ( 'http://127.0.0.1:' + port);
