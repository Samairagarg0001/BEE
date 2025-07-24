function add(a,b)
{
    return a+b;
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}

let obj={
    a:"hi",
    b:10
}
obj.c=30;
//console.log(obj);
console.log(module.exports);
//console.log(add(2,3));
module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;
console.log(module.exports)