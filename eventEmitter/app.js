var events = require('events');
var util = require('util');
// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent', 'the event was emitted');
var person = function (name){
this.name = name;
}

util.inherits(person,events.EventEmitter);

var rahat = new person('Rahat');
var islam = new person('Islam');
var akash = new person('Akash');

var people = [rahat,islam,akash];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said ' + msg);
    })
})

rahat.emit ('speak', 'hello world');

