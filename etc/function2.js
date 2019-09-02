
var database = {
    name:'hugo',
    age : 35,
    job :'programer'
};

var obj  = {
    private : {

    }
    , public:{
        main:function()
        {
            console.log ( 'main');
        },
        makeFn:function()
        {
            return function (){return database.name}();
        },
        forloop:function()
        {
            for(var i in database)
            {
                console.log ( database[i]);
            }
        },
        retrunArray:function()
        {
            
        }
    }
};

var person = {
    name:'ronnie janga',
    printName : ()=>{
        console.log (person);
    }
};

var array = [
    'hello',
    10,
    10,
    {'name':'hugo'}
];

(function(obj){
    //생성자.
    obj.public.main();
    obj.public.makeFn();
    obj.public.forloop();
})(obj);