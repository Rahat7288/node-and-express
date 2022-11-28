var fs = require('fs');
// reading files using universal text format 8
var readMe = fs.readFileSync('note.txt', 'utf8');

console.log(readMe);