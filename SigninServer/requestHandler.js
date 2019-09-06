var fs = require('fs');

var mysqlDB;

function connectDB(database)
{
    mysqlDB= database;
}

function start(req, res)
{
  fs.readFile('./register.html' , function (error, html){
    
    res.send ( html.toString());
})
}


function showRegisterFrom(req , res ) 
{
    fs.readFile('./register.html' , function (error, html){
        res.send ( html.toString());
    });
}

function showLoginFrom(req, res)
{
    fs.readFile('./login.html' , function (error, html){
        res.send ( html.toString());
    })
}

function register(req, res)
{
    var data = {
        userid : req.body.userid,
        nickname : req.body.nickname,
        password : req.body.password
    }
    console.log (data);
    mysqlDB.register(res, data);
}

function login(req, res)
{
    var data = {
        userid : req.body.userid,
        password : req.body.password
    }

    mysqlDB.login(res, data);
}

module.exports = {
    connectDB:connectDB,
    start:start,
    showRegisterFrom:showRegisterFrom,
    showLoginFrom:showLoginFrom,
    register:register,
    login:login

}