var http = require('http');

http.createServer(function (req, res){
    var cookie = req.headers.cookie;

    console.log ( JSON.stringify(cookie) );

    var date = new Date();
    
    date.setDate( date.getDate() +7 );
    req.cookies.name
    res.writeHead(200 , {'Content-Type':'text/html',
    'set-Cookie':[
        'name=hugo; Expires='+date.toUTCString(),
        'test'
    ]});


    console.log ( JSON.stringify(cookie) );
    res.end('end');
}).listen(3000);