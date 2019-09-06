var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

function setRouter(app , rule){
    for(var ix in rule ) {
        if(rule[ix].method == 'GET'){
            app.get(rule[ix].path , rule[ix].callback);
        }else if(rule[ix].method == 'POST'){
            app.post(rule[ix].path , rule[ix].callback);
        }else if(rule[ix].method == 'PUT'){
            app.put(rule[ix].path , rule[ix].callback);
        }else if(rule[ix].method == 'DELETE'){
            app.delete(rule[ix].path , rule[ix].callback);
        }
    }
}

function serverStart(rule){
    var app = express();
    app.use(bodyParser());
    setRouter(app , rule);
    http.createServer(app).listen(3000);
}

module.exports = {
    serverStart:serverStart    
}
