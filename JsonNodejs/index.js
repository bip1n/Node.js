const fs =require("fs");
const bioData = {
    name : "bipin",
    age : 20,
    college : "ncit",
};
// console.log(bioData.name);
//bipin 

/* task: 
1. convert to json
2. add it to new file
3. read the new file
4. convert the json to object
*/

// converting object to json
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
//Coutput: {"name":"bipin","age":20,"college":"ncit"}

// adding the json object to new file 'data.json'

// fs.writeFile("data.json",jsonData,(err)=>{
//     console.log("done");
// })

//reading the json file 
fs.readFile("data.json","utf-8",(err,data)=>{
    if (err){ console.log(err)}
    else
    ( console.log(data));
    // changing the json to object
    const oriData = JSON.parse(data);
    console.log(oriData);
})




// converting json to object
// const object = JSON.parse(jsonData);
// console.log(object.name);
// output : { name: 'bipin', age: 20, college: 'ncit' }

