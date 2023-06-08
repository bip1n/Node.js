const add = (a,b) => {
     return a+b;
}

const sub = (x,y) => {
    return x - y;
} 

const mul=(x,y)=>{
    return x*y;
}

const name = 'bipin';
// exporting modules to index.js file
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

//object destructring
module.exports ={ add,sub,mul,name}
