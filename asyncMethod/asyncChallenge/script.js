/*
create a folder
create a text file and inserting data into it
adding more data or append the file
reading the data without the buffer
renaming the file and deleting the file
*/

const fs=require("fs");
//writing into the file
// fs.writeFile("asyncMethod/asyncChallenge/bio.txt","Hello World, how are you?",(err, data)=>{
// })

// append the file
// fs.appendFile("asyncMethod/asyncChallenge/bio.txt","\nThe day is beautiful. Isn't it?",(err,data)=>{});

// reading the file
// fs.readFile("asyncMethod/asyncChallenge/bio.txt","utf-8",(err,data)=>{ console.log(data)})

// renaming the bio.txt file to myBio.txt
// fs.rename("asyncMethod/asyncChallenge/bio.txt",("asyncMethod/asyncChallenge/myBio.txt"),(err,data)=>{})

//deleting the myBio.txt file
fs.unlink("asyncMethod/asyncChallenge/myBio.txt",(err,data)=>{})