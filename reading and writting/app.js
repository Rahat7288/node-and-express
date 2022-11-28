var fs = require('fs');
// reading files using universal text format 8 with syncro type 
fs.readFile('note.txt', 'utf8', function(err, data){
    // console.log(data);
    // creating and writing in new file 
    fs.writeFile('write.txt', data);
});
// to write in txt file using node;
// fs.writeFileSync('note.txt', readMe);





// console.log('test');