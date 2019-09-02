var server = require('./server');
var router = require('./router');

 server.serverStart( 3000 , router.router);