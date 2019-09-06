var mysql = require('mysql');


var client = mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'qwer1234',
    database:'userdb'
});


client.connect(function (error){
    if(error){
        console.log ( error);
    }
});

function login(res , data)
{
    var query = 'select *from userdb.userinfo where userid=? and password=?'
    client.query(query , [data.userid, data.password]
        ,function(error , results , fields){
            if(error)
            {
                res.send('쿼리 검색 실패' + error);
            }else{
                //console.log ( 'result.length : ' , results.length);
                if(results.length>0)
                {
                    res.send('로그인 성공');
                }else{
                    res.send('로그인 실패');
                }
            }

    });
}

function register(res, data)
{
    var query = 'select *from userdb.userinfo where userid=?';
    client.query(query, data.userid, function (error , results){
        if(results.length > 0 )
        {
            res.send('ID가 사용 중 입니다.');
        }else{
            query = 'insert into userdb.userinfo set?';
            client.query(query, data , function(error, results){
                if(error){
                    res.send('사용자 등록 실패' + error);
                }else
                {
                    res.send('사용자 등록 성공' + data.userid);
                }
            })
        }
    });
}

module.exports = {
    login,
    register
}