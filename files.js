const fs = require("fs");


//reading files(Asynchronous[non-blocking])
// fs.readFile('./docs/blog.txt',(err,data)=>{
// if(err){
//     console.log(err);
// }
// console.log(data.toString());
// });

// console.log("last line");


//writing files
// fs.writeFile('./docs/blog.txt',"hi preeti",()=>{
//     console.log("file was written");
// });
// fs.writeFile('./docs/blog1.txt',"hi there",()=>{
//     console.log("file was written to another blog");
// });



//directories
if(!fs.existsSync('./assets')){   //toCheck if the folder already exists than dont run this code again
fs.mkdir('./assets',(err)=>{
if(err){
    console;log(err);
}
console.log("folder created");
})
}else{
    fs.rmdir('./assets', (err)=>{
         if(err){
            console.log(err);
         }
         console.log('folder removed');
    })
}


//deleting files
if(fs.existsSync("./docs/deleteMe.txt")){
    fs.unlink('./docs/deleteMe.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}