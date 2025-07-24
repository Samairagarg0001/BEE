const fs = require("fs");
console.log("start");
setImmediate(() =>{
    console.log("immediate1")
})

setTimeout(() => {
    console.log("timer1")
},0)

fs.readFile("demo.txt","utf-8",(err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})
function fun(){
    console.log("fun");
}
fun();
console.log("end")