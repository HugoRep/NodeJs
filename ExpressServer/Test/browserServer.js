var browserSync = require("browser-sync").create();


// app.use(function(req, res){
//     res.writeHead(200 , {'Content-Type' : 'text/html; charset=utf-8' });
//     res.end('Express server');

// }).listen(3000);


browserSync.reload("*.js");


browserSync.init({
    watch: true,
    server: "./",
    callbacks: {
        ready: function(err, bs) {
            bs.addMiddleware("*", function (req, res) {
                res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
                res.end('dfdf');
            });
        }
    }
});