import {getEventFiles} from "./fileScript"
import fs from "fs"

function initSubject(){
    var filePaths = getEventFiles();
    filePaths.forEach(filePath => {
        fs.readFile(filePath,(err,data)=>{
            if (err){
                return console.log(err);
            }
            console.log(data)
        })
    });
}

initSubject();