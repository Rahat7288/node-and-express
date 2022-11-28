var fs = require('fs');
// delete a file 


// fs.unlink('write.txt',(err)=>{
//     if(err)throw err;
//     console.log('path is deleted');
// });

// creating a directory
// fs.mkdirSync('stuff');


// deleting a directory
// fs.rmdirSync('stuff');


fs.mkdir('stuff',{recursive: true}, function(){
    fs.readFile('readme.txt', function(err, data){
        console.log(data);
        fs.writeFile('./stuff/write.txt', (curr, prev)=>{
            console.log('file is created');
        });
    })
})