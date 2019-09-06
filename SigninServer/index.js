var server = require('./server');
var handler = require('./requestHandler');
var database = require('./database');

function RuleCreator(path , method , callback)
{
    this.path = path;
    this.method = method;
    this.callback = callback;
}

var rule = [
    new RuleCreator('/' , 'GET' , handler.start),
    new RuleCreator('/register' , 'GET' , handler.showRegisterFrom),
    new RuleCreator('/login' , 'GET' , handler.showLoginFrom),
    new RuleCreator('/register' , 'POST' , handler.register),
    new RuleCreator('/login' , 'POST' , handler.login)
];

handler.connectDB(database);
server.serverStart(rule);