var http = require ('http');
var fs = require('fs');
var ejs = require('ejs');



var ejsFile = fs.readFileSync('./ejsPage.ejs' , 'utf8');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
    res.write(ejsFile);
    res.end();
    /*
    fs.readFile(ejsFile ,'utf8', function (error, html){
        res.writeHead(200 ,{'Content-Type' : 'text/html'} );
        
    })
    */
   
}).listen(3000);