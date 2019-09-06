var server = require('./server');
var handler = require('./requestHandler')
var router = require ( './route');
var path = {
    '/':handler.start,
    '/favicon.ico':handler.favicon,
    '/upload':handler.upload,
    '/show':handler.show,
}

server.serverStart(path , router.route)