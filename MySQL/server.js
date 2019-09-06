var mysql = require('mysql');

var client = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'qwer1234'
});

client.connect();

client.query('SELECT * FROM mall.orderinfo' , function(err , result , fields){
    
    if( err){
        console.log ( err );
    }else{
        console.log ( result ) ;
        for(var key in result )
        {
             console.log ( key , result[key].no);
        }
    }
});

client.end();