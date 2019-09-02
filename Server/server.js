var http = require('http');
var port = 3000;

var serverStart = function ( port, route)
{
  var onResponse = function(req , res)
  {
     var pathName = req.url;
     route(pathName , req , res);
   }
  var server = http.createServer(onResponse).listen(port);
}

module.exports = {
  'serverStart' : serverStart
}