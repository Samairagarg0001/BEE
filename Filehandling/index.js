const fs = require("fs");
fs.writeFile("./data.txt", "hello samaira!!", function(err)
{
    if(err)
    {
        return console.log(err)
        console.log("data written")
    }
})
fs.appendFile("./data.txt", "hiii samaira!!", function(err)
{
     if(err)
    {
        return console.log(err)
        console.log("update file")
    }

})