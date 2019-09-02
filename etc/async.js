function start()
{
    console.log ( '시작' );
}

function middle()
{
    console.log ( '중간' );
}

function end()
{
    console.log ( '종료');
}

start();

setTimeout(middle, 2000);
//middle();
end();
