import fs from "node:fs/promises";

//Reading the file with promises API
fs.readFile('JS-PRACTICE(21-DEC-2023)/data.json', 'utf-8')
.then(data => {
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Complete");
   
});
