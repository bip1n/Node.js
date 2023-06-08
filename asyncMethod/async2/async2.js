const fs=require('fs');

fs.readFile("asyncMethod/async2/newFile.txt","utf-8",(err,data)=> {
    console.log(data);
});
console.log('msg');
// console.log("after the data");
