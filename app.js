console.log('hello Rahat');

// set a time to execute the function

setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);

// setting an inerval time 

var time = 0;
setInterval(function(){
    time +=2;
    console.log(time +'time have passed');
    if(time >10){
        clearInterval(time);
    }
},2000);