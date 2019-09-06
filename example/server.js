var http = require('http');

http.createServer(function (req , res ){
    
    var url = req.url;
    res.writeHead(200 , {'Context-type':'text/html'})
    if( url === '/')
    {
        res.end('root');
    }else if ( url == '/start'){
        res.end('start');
    }else if ( url === '/show'){
        res.end('show');
    }else{
        res.end('404 Not found');
    }
}).listen(8000)