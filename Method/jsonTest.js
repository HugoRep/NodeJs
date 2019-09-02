var obj = {
    name:'hugo' , 
    jop:'freelancer'
};

 var jsonToObj = '{"name":"hugo" , "job":"freelancer"}';
var jsonObj = JSON.parse(jsonToObj);

console.log ( jsonObj.name);
console.log ( jsonObj.job);

var jsonToString = JSON.stringify(obj);
console.log ( jsonToString);