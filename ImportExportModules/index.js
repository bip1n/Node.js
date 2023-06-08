
// old fashioned way
// const operator = require('./operator')
// console.log(operator.add(5,5));
// console.log(name)
// console.log(operator.sub(55,5));
// console.log(operator.mul(5,50))


//convinient way
const {add,sub,mul,name}=require("./operator");
console.log(add(5,5));
console.log(sub(55,5));
console.log(mul(5,50))
console.log(name);
