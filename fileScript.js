const fs = require("fs")
function getEventFiles(){
    if (!fs.existsSync("./eventFiles"))
    {
        fs.writeFile("./eventFiles/temp.json","{}",(err)=>{
            if (err) { return console.log(err); }
        })
        fs.rm("./eventFiles/temp.json",(err)=>{
            if (err){ return console.log(err); }
        })
    }
    var filePaths = []
    fs.readdir("./eventFiles/",{encoding:"utf-8"},(err,files)=>{
        if (err){return console.log(err);}
        filePaths=files;
    })
    return filePaths;
}


module.exports={
    getEventFiles: getEventFiles
}