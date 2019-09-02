var http = require('http');


function serverStart(rule , route)
{
    var server = http.createServer ( function(req , res){
        //get. post Check;
        var method = req.method;
        console.log (route )
        //route(method , req , res );
    }).listen(3000);
    
}

module.exports = {
    serverStart :serverStart
}



