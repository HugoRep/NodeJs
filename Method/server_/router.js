var handler = require('./requestHandler.js')

var rule = {
    'GET' : handler.get,
    'POST' : handler.post
}

function route( method , req , res ) 
{
    console.log ( 'caaa');
    if( typeof rule[method]  === 'function' ) {
        rule[method](req, res ) ;
    }else{
        console.log ( "No function to response");
    }
}

module.exports = {
    route:route
}