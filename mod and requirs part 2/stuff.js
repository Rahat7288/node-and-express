var add = function (a, b){
   return `the summetion of two number are ${a+b}`;
}

var remove = function (a, b){
    return `the division of two numbers are ${a-b}`;
}

var pi = 3.1416;
// if we need to pass to many things at a time we 
module.exports.add = add;
module.exports.remove = remove;
module.exports.pi = pi;

// we can also declear or pass the functions like this
// module.exports{
//     add:   add, 
//     remove: remove,
//     pi:     pi

// };