const fs = require('fs');
const path = require('path');

// const readFileAsync = function(path){
//     fs.readFile(path, 'utf8', function(err, data){
//         process.send(data);
//     });
// }

process.on('message', msg => {
   //  readFileAsync(msg);
   const readable =fs.createReadStream(msg,{encoding:'utf8'});
   readable.on('data',function(chunk){
        process.send(chunk);
   })
     
});