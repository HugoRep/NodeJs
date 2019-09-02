var http = require('http');
var url = require('url');

var server = http.createServer( function(req, res){
    var  query = url.parse(req.url , true).query;
    console.log ( req.method , query);

    res.writeHead(200 , {'Content-Type':'text/html'});
    res.write(JSON.stringify(query));
    for( var i in query ) 
    {
        console.log ( i , ':' , query[i]);
    }
    res.end();
}).listen(3000);