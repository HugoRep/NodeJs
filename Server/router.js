var handler = require('./requestHandler')

var routerPathObj = {
    '/':handler.start,
    '/favicon.ico':handler.favicon
}
var router = function(pathName, req , res)
{
    if( typeof(routerPathObj[pathName]) === 'function'){
        routerPathObj[pathName](req,res);
    }else{
        console.log('처리함수 없음');
    }
}

module.exports = {
    'router':router
}