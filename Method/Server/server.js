var http = require('http');

function serverStart(route) {


    var server = http.createServer(function(req, res) {

        
        var method = req.method;
        route(method, req, res);
    });

    // 요청 대기.
    server.listen(3000);
}

module.exports = {
    serverStart : serverStart
};