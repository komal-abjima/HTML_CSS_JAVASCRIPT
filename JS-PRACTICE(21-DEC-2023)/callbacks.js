import fs from "node:fs";

fs.readFile('JS-PRACTICE(21-DEC-2023)/data.json', 'utf-8', (err, data) =>{
    if(err){
        console.log("error reading the file..");
        throw err;
    }
    try{
    const dataObj = JSON.parse(data);
    console.log(dataObj);
    console.log("Completed...");
    }
    catch(err){
        console.log("Cannot covert in json");
        throw err;
    }
});