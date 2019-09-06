var fs = require ( 'fs' );
var formidable = require('formidable');

function start(req , res ) 
{
    fs.readFile('./upload.html', function (error , html){
        res.setHeader('Content-Type', 'text/html');
        res.end (html);
    });
}

function favicon(req , res)
{
    fs.readFile('./icon.js' , function (error , image){
        res.setHeader('Content-Type', 'text/html');
        res.end(image);
    })
}

function show ( req , res ) 
{
    fs.readFile('./upload/image.png' , function(error , image){
        res.setHeader('Content-Type', 'text/html');
        res.end(image);
    });
}

function upload(req , res)
{
    var form = new formidable.IncomingForm();
    form.parse(req, function(error , field , files ){
       console.log ( files.image.path);
       fs.rename(files.image.path , './upload/image.png' , function(error)
       {
           console.log( files.image.path , show);
           res.setHeader('Content-Type', 'text/html');
           res.end('<img src=/show />');
       })
    });
}

module.exports = {
    start,
    favicon,
    upload,
    show
}