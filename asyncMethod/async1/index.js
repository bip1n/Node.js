const { isUtf8 } = require('buffer');
const { error } = require('console');
const fs = require('fs');

/*Creating a new file and Writing into the file */
// fs.writeFile("newFile.txt","Today's weather is awesome :)",(err) => {
//     console.log(err);
// });
 /* Append file */
// fs.appendFile("newFile.txt","\nIsn't it?",(err)=>{
//     console.log(err);
// })

 /* Reading file without buffer*/
fs.readFile("newFile.txt",'utf-8',(err,data)=>{
    console.log(data);
});
