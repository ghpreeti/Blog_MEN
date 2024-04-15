//Streams:start using data before it has finished loading...

const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt',{encoding:'utf8'});// instead of using toString( ) we can use {encoding: 'utf8'} for getting buffer in a readable form

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data',(chunk)=>{
//     console.log("-----NEW CHUNKS------");
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });



//piping
readStream.pipe(writeStream);