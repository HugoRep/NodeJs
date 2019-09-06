var http = require ( 'http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var app  = express();

app.use(bodyParser.urlencoded({
    extended:false
}));

app.get('/' , function (req, res){
    var auth = req.headers.cookie['auth'];
    if( auth)
    {
        res.send('로그인 성공');
    }else{
        res.redirect('/login');
    }
});

app.get('/login' , function (req, res){
    fs.readFile('./login.html', function(error , html){
        if( error)
        {
            res.send('error');
        }else{
            res.send(html.toString());
        }
    });
});

app.post('/login' , function (req, res){
    var login = req.body.login;
    var password = req.body.password;

    console.log ( login , password);
    res.cookie('login' , login);
    res.cookie('password' , password);

    // var login = req.body.login;
    // var password = req.body.password;

    // req.cookies['login'] =login;
    // req.cookies['password'] = password;

    // console.log ( typeof cookie ) ;
    // ///console.log ( login , password );
    // if( login === 'ttt' && password === '1111'){
    //     res.writeHead(200 , {'Context-Type':'text/html; charset=utf-8'})
    //     res.end('완료');
    //     //res.redirect('/test');
    // }else{
    //     res.send('로그인 실패');
    // }
});

http.createServer(app).listen(3000);
console.log ( 'server start~');