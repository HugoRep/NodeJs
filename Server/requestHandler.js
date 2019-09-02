var fs = require('fs');

var start = function( req , res)
{
    res.writeHead( 200 ,{'Content-Type':'text/plain; charset=utf8'});
    res.write('first nodeJS Server');
    res.end();
};

var favicon = function ( req , res ) 
{
    fs.readFile('download.jpg', function(error, data )
    {
        res.writeHead( 200 ,{'Content-Type':'image/png'});
        res.write(data);
        res.end();
    });
};

module.exports = {
    'start' : start,
    'favicon' : favicon
}