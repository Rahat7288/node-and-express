// normal function statement
function sayHi(){
    console.log('hello');
}

sayHi();

// anonymous function

var sayBye = function(){
    console.log("ok bye");
}

sayBye();


// passing function to another function

var Myname = function(){
    console.log('Hello Rahat');
}

function callFunction(fun){
    fun();
}


callFunction(Myname);