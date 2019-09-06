var fs = require('fs');
var ejs = require('ejs');

var mysqlDB;

function connectDB(database)
{
    mysqlDB= database;
}

function start(req, res)
{
    fs.readFile('./register.html' , function (error, html){
        res.send ( html.toString());
    });
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

function showBoard(req , res){
    fs.readFile('./board.html', 'utf-8' , function (error, html){
        mysqlDB.showBoard(res, ejs , html);
    })
}

function showWritingForm(req , res){
    fs.readFile('./writeForm.html' , 'utf-8' ,function (error, html){
        res.end(html.toString());
    });
}

function saveContent(req, res){
    var data = {
        author:req.cookies.userid,
        title:req.body.title,
        content:req.body.content
    };

    mysqlDB.saveContent(res, data);
}

function showCotent(req, res){
    console.log ( 'request : showCotent');
    fs.read('./showContent.html', 'utf-8' ,function (error , html){
        if( error ) 
        {
            console.log ( "showContent : error " + error ) ;
        }
        else
        {
            console.log ( "showContent sucess" ) ;
        }
        mysqlDB.showCotent(req, res, ejs, html );
    });
}

module.exports = {
    connectDB:connectDB,
    start:start,
    showRegisterFrom:showRegisterFrom,
    showLoginFrom:showLoginFrom,
    register:register,
    login:login,
    showBoard:showBoard,
    showWritingForm:showWritingForm,
    saveContent:saveContent,
    showCotent:showCotent
}