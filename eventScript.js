import {getEventFiles} from "./fileScript"

function initSubject(){
    var filePaths = getEventFiles();
    filePaths.forEach(filePath => {
        const fileNameWithoutExtension = filePath.split('\\').pop().split('.').slice(0, -1).join('.');
        var el = document.createElement("label")
        el.innerText=fileNameWithoutExtension;
        document.getElementById("eventFolders").appendChild(el)
    });
}

initSubject();