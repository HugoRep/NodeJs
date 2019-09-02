var http = require('http');
var handler = require('./requestHandler');



function serverStart(rule , route)
{
    var server = http.createServer ( function(req , res){
        //get. post Check;
        var method = req.method;
        
        route(method , req , res );
    }).listen(3000);
    
}

module.exports = {
    serverStart :serverStart
}



