var server = require('./server');
var router = require('./router');

server.serverStart(router.route);