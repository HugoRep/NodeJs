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
                    //res.send('로그인 성공');

                    res.cookie('userid' , data.userid);
                    res.redirect('/board/writing');
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

function saveContent(res, data)
{
    var queryString = 'insert into userdb.board set ?';
    client.query(queryString, data, function(error){
        if(error){
            console.log ( '글 저장 오류'+error);
            res.send("글 저장 오류 :" +error);
        }else{
            console.log ( '글 저장 성공');
            res.redirect('/board')
        }
    });
}

function showBoard(res , ejs, html ) {
    console.log ( 'data : showCotent');
    var queryString = 'select * from userdb.board';
    client.query(queryString, function (error , results){
        if(error){
            console.log ( '글 조회 오류 : '+error);
            res.send ( '글 조회 오류 : '+error);
        }else{
            if( results.length > 0 ) {
                console.log ( '글 조회 성공');
                res.send(ejs.render(html, {
                    data :results
                }));
            }else{
                res.send(html.toString());
            }
        }
    })
}

function showContent(req, res , ejs, html){
    var queeryString = 'select *from userdb.board where no=?';

    client.query(queryString, req.params.id, function(error , results){
        if(error)
        {
            console.log ( "글 " + req.params.id +"조회 실패" +error);
            res.sedn ( "글 " + req.params.id +"조회 실패" +error);
        }else{
            if(results.length > 0 ) {
                res.send(ejs.render(html,{
                    data:results[0]
                }));
            }
        }
    });
}

module.exports = {
    login,
    register,
    saveContent,
    showBoard,
    showContent
}
